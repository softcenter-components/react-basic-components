import styled from 'styled-components'

const StyledLoadingBackdrop = styled.div`
  width: 100%;
  height: 100%;
  z-index: 30;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  grid-gap: 15px 0;
  > svg {
    width: 200px;
    height: 200px;
  }
  > span {
    color: white;
    font-weight: 500;
    font-size: 25px;
  }
`;

export default StyledLoadingBackdrop;