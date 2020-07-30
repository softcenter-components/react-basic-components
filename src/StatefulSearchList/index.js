import React, { useRef, useState, forwardRef } from 'react'
import { adaptRegExp } from '../util/formatting'
import { SearchList } from '../SearchList'

const StatefulSearchList = forwardRef(
  (
    {
      data = [],
      onSelectItem = () => {},
      onResetValue = () => {},
      Component,
      ...props
    },
    ref
  ) => {
    const [showList, setShowList] = useState(false)
    const [list, setList] = useState([])

    const itemSelected = useRef(false)
    const container = useRef()
    ref = ref || useRef()

    const selectItem = (value) => {
      itemSelected.current = true
      setShowList(false)
      onSelectItem(value)
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

      if (list.length >= 0 && list.length > 10) {
        list = list.slice(0, 10)
        setList(list)
      }
    }

    return (
      <Component
        containerRef={container}
        ref={ref}
        onChange={(e) => {
          if (!showList) setShowList(true)
          itemSelected.current = false
          filterList(e.target.value)
        }}
        onFocus={() => {
          if (!showList) setShowList(true)
        }}
        list={
          showList && (
            <SearchList
              containerRef={container}
              setShow={onListShowChange}
              onSelectItem={selectItem}
              data={list}
            />
          )
        }
        {...props}
      />
    )
  }
)

export { StatefulSearchList }
