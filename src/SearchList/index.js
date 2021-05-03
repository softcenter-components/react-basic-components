import React, { useEffect, forwardRef, useRef } from 'react'

import StyledSearchList from './style'
import { SearchListLoadingIcon } from '../assets/icons'

const SearchListComponent = forwardRef(
  (
    {
      items = [],
      unclickable,
      className,
      loading,
      onScroll,
      addDescriptionToItems
    },
    ref
  ) => {
    return (
      <StyledSearchList
        className={`${className} ${
          addDescriptionToItems ? 'description-mode' : ''
        }`}
        ref={ref}
        onScroll={onScroll}
      >
        {items.map((e, i) => {
          const classNames = `item 
          ${unclickable ? 'disable' : ''} 
          ${e.descpt ? 'descpt' : ''}`

          return (
            <div
              key={i}
              className={classNames}
              onClick={unclickable ? undefined : e.onClick}
            >
              <span>{e.value}</span>
              {e.descpt ? <span>{e.descpt}</span> : null}
              <div className='line' />
            </div>
          )
        })}
        {loading && (
          <span className='item center'>
            <SearchListLoadingIcon />
          </span>
        )}
      </StyledSearchList>
    )
  }
)

const SearchList = forwardRef(
  (
    {
      onSelectItem = () => {},
      setShow,
      data = [],
      containerRef,
      onScroll,
      loading,
      className,
      addDescriptionToItems
    },
    ref
  ) => {
    if (!ref) ref = useRef()
    const noData = data.length === 0

    useEffect(() => {
      const clickHandler = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setShow(false)
        }
      }
      const focusHandler = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setShow(false)
        }
      }

      document.addEventListener('click', clickHandler, false)
      document.addEventListener('focus', focusHandler, false)

      return () => {
        document.removeEventListener('click', clickHandler, false)
        document.removeEventListener('focus', focusHandler, false)
      }
    }, [containerRef, setShow])

    return (
      <SearchListComponent
        className={className}
        onScroll={onScroll}
        addDescriptionToItems={addDescriptionToItems}
        items={
          noData
            ? [{ value: 'Nenhum resultado encontrado' }]
            : data.map((e) => ({
                value: e.value,
                descpt: e.descpt,
                onClick: () => {
                  onSelectItem(e.data, e.value)
                  setShow(false)
                }
              }))
        }
        loading={loading}
        unclickable={noData}
        ref={ref}
      />
    )
  }
)

export { SearchList }
