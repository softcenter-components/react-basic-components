import styled from 'styled-components'

export const StyledInputComboBox = styled.div`
  position: relative;

  > .itens-list {
    position: absolute;
    border: 1px solid #acacac;
    display: grid;
    max-height: ${(props) => props.listMaxHeight};
    overflow-y: scroll;
    background: white;
    width: 100%;

    > span {
      padding: 7px 12px;
      border-bottom: 1px solid #acacac;

      &:hover {
        background: #dddddd;
        cursor: pointer;
      }
    }

    > span:last-child {
      border: none;
    }
  }
`
