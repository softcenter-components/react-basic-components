import styled from 'styled-components'

export const StyledInputComboBox = styled.div`
  > .itens-list {
    border: 1px solid #acacac;
    display: grid;

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
