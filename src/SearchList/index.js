import React, { useEffect, forwardRef } from 'react'

import StyledSearchList from './style'
import { SearchListLoadingIcon } from '../assets/icons'

const SearchListComponent = forwardRef(
  ({ items = [], unclickable, loading, onScroll }, ref) => {
    return (
      <StyledSearchList ref={ref} onScroll={onScroll}>
        {items.map((e, i) => (
          <div
            key={i}
            className={`item ${unclickable ? 'disable' : ''}`}
            onClick={unclickable ? undefined : e.onClick}
          >
            <span>{e.value}</span>
            <div className='line' />
          </div>
        ))}
        {loading && (
          <span className='item center'>
            <SearchListLoadingIcon />
          </span>
        )}
      </StyledSearchList>
    )
  }
)

const SearchList = ({
  onSelectItem = () => {},
  setShow,
  data = [],
  containerRef,
  onScroll,
  loading
}) => {
  const noData = data.length === 0

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false)
      }
    }

    document.addEventListener('click', handler, false)

    return () => {
      document.removeEventListener('click', handler, false)
    }
  }, [containerRef, setShow])

  return (
    <SearchListComponent
      onScroll={onScroll}
      items={
        noData
          ? [{ value: 'Nenhum resultado encontrado' }]
          : data.map((e) => ({
              value: e.value,
              onClick: () => {
                onSelectItem(e.data, e.value)
                setShow(false)
              }
            }))
      }
      loading={loading}
      unclickable={noData}
    />
  )
}

export { SearchList }
