import React, { useState } from 'react'

import { LabeledInput } from '../index'
import { StyledInputComboBox } from './style'

export const InputComboBox = React.forwardRef((props, ref) => {
  const [filteredItemsList, setFilteredItemsList] = useState([])

  const formatText = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

  const refilter = e => {
    console.log(e)
    if (e.target.value.trim() === '') return setFilteredItemsList(props.itemsList)
    const result = props.itemsList.filter(item => formatText(item).includes(formatText(e.target.value)))
    setFilteredItemsList(result)
  }

  return (
    <StyledInputComboBox 
      listMaxHeight={props.listMaxHeight ? props.listMaxHeight : "200px"} >
      <LabeledInput 
        {...props} 
        ref={ref}
        onFocus={refilter} 
        onChange={refilter} 
        onBlur={() => setTimeout(() => setFilteredItemsList([]), 100)}
      />
      {
        filteredItemsList.length > 0 && 
        <div className='itens-list' >
          {filteredItemsList.map((e, i) => 
            <span 
              key={i} 
              onClick={() => {
                ref.current.value = e
                if (props.itemOnClick) props.itemOnClick(e)
              }} 
            > {e}</span> 
          )}
        </div>
      }
    </StyledInputComboBox>
  )
})