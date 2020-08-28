import React, { useRef, useState, forwardRef, useEffect } from 'react'
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
      className,
      icon,
      onFocus,
      onThresholdReached,
      itemIsSelected = false,
      ...props
    },
    ref
  ) => {
    const [showList, setShowList] = useState(false)
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const itemSelected = useRef(itemIsSelected)
    const container = useRef()
    const lastDataLength = useRef(0)
    const lastSearchCriteria = useRef('')
    const searchListRef = useRef(null)
    const timesThresholdReached = useRef(1)

    ref = ref || useRef()

    useEffect(() => {
      setLoading(false)
    }, [data, list])

    const selectItem = (data, value) => {
      itemSelected.current = true
      setShowList(false)
      onSelectItem(data, value)
      ref.current.value = value
      setList([])
      ref.current.blur()
    }

    const onSetShowChange = (value) => {
      setShowList(value)

      if (!itemSelected.current) {
        ref.current.value = ''
        onResetValue(value)
      }
    }

    const filterList = (value) => {
      value = '^' + adaptRegExp(value.trim())
      const matchItemRegExp = new RegExp(value, 'i')

      let list = data.filter((item) => {
        try {
          if (item.value.match(matchItemRegExp)) return true
          return false
        } catch (e) {
          console.log(e)
          return false
        }
      })

      if (list.length >= 0) {
        list = list.slice(0, 10 * timesThresholdReached.current)
        setList(list)
        setLoading(false)
      }
    }

    const onScroll = (event) => {
      const scrollPosition = event.target.scrollTop
      const scrollSize = event.target.scrollHeight
      const scrollContainerSize = event.target.offsetHeight

      const bottomPosition = scrollSize - scrollContainerSize

      const currentDataLength = autoFilter ? list.length : data.length

      const dataChanged =
        lastDataLength.current !== currentDataLength ||
        lastSearchCriteria.current !== ref.current.value

      if (scrollPosition + 20 >= bottomPosition && dataChanged) {
        ++timesThresholdReached.current
        lastSearchCriteria.current = ref.current.value
        lastDataLength.current = currentDataLength

        if (typeof onThresholdReached === 'function')
          onThresholdReached(timesThresholdReached.current)

        setLoading(true)
        if (autoFilter) filterList(ref.current.value)
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
          timesThresholdReached.current = 1
          console.log('searchListRef.current', searchListRef.current)
          if (searchListRef.current) searchListRef.current.scrollTop = 0
        }}
        onFocus={(e) => {
          if (autoFilter) filterList('')
          if (!showList) setShowList(true)
          if (typeof onFocus === 'function') onFocus(e)
        }}
        list={
          showList && (
            <SearchList
              className={className}
              containerRef={container}
              setShow={onSetShowChange}
              onSelectItem={selectItem}
              data={autoFilter ? list : data}
              onScroll={onScroll}
              loading={loading}
              ref={searchListRef}
            />
          )
        }
        {...props}
      />
    )
  }
)

export { StatefulSearchList }
