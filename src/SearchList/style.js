import styled from 'styled-components'

const StyledSearchList = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  background: #fff;
  box-shadow: 0 0 16px -5px #00000045;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 30px;
  height: auto;
  max-height: 148px;
  overflow: hidden auto;
  z-index: 20;

  > .item {
    word-break: keep-all;
    white-space: nowrap;
    width: 100%;
    position: relative;
    color: #898989;
    font-size: 1.65rem;
    font-weight: 500;
    display: grid;
    place-content: center;
    place-items: center;
    justify-content: flex-start;
    padding: 0 8%;
    cursor: pointer;

    &:hover {
      background: #f2f2f2;
    }

    &.disable {
      cursor: default;
      &:hover {
        background: white;
      }
    }

    > span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
    }

    > .line {
      place-self: center;
      width: 85%;
      background: #c0c0c0;
      height: 1px;
      position: absolute;
      bottom: 0;
    }
    &:last-child > .line {
      display: none;
    }
  }
`

export default StyledSearchList
