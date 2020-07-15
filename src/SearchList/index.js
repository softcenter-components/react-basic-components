import React, { useEffect, forwardRef } from 'react'

import StyledSearchList from './style'

const SearchListComponent = forwardRef(({ items = [], unclickable }, ref) => {
  return (
    <StyledSearchList ref={ref}>
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
    </StyledSearchList>
  )
})

const SearchList = ({
  onSelectItem = () => {},
  setShow,
  data = [],
  containerRef
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
      items={
        noData
          ? [{ value: 'Nenhum resultado encontrado' }]
          : data.map((e) => ({
              value: e.value,
              onClick: () => {
                onSelectItem(e.data)
                setShow(false)
              }
            }))
      }
      unclickable={noData}
    />
  )
}

export { SearchList }
