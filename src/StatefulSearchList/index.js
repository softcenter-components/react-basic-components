import React, { useRef, useState, forwardRef } from 'react'
import { adaptRegExp } from '../util/formatting'
import { SearchList } from '../SearchList'

const StatefulSearchList = forwardRef(
  (
    {
      data = [],
      onSelectItem = () => {},
      onResetValue = () => {},
      autoFilter = true,
      onChange,
      Component,
      icon,
      ...props
    },
    ref
  ) => {
    const [showList, setShowList] = useState(false)
    const [list, setList] = useState([])

    const itemSelected = useRef(false)
    const container = useRef()
    ref = ref || useRef()

    const selectItem = (data, value) => {
      itemSelected.current = true
      setShowList(false)
      onSelectItem(data, value)
      ref.current.value = value
      setList([])
      ref.current.blur()
    }

    const onListShowChange = (value) => {
      setShowList(value)
      if (!itemSelected.current) {
        ref.current.value = ''
        onResetValue(value)
      }
    }

    const filterList = (value) => {
      value = '^' + adaptRegExp(value.trim())
      const regExp = new RegExp(value, 'i')

      let list = data.filter((item) => {
        try {
          if (item.value.match(regExp)) return true
          return false
        } catch (e) {
          console.log(e)
          return false
        }
      })

      if (list.length >= 0) {
        list = list.slice(0, 10)
        setList(list)
      }
    }

    return (
      <Component
        containerRef={container}
        ref={ref}
        icon={icon}
        onChange={(e) => {
          if (onChange) onChange(e)
          if (!showList) setShowList(true)
          itemSelected.current = false
          if (autoFilter) filterList(e.target.value)
        }}
        onFocus={(e) => {
          if (autoFilter) filterList(e.target.value)
          if (!showList) setShowList(true)
        }}
        list={
          showList && (
            <SearchList
              containerRef={container}
              setShow={onListShowChange}
              onSelectItem={selectItem}
              data={autoFilter ? list : data}
            />
          )
        }
        {...props}
      />
    )
  }
)

export { StatefulSearchList }
