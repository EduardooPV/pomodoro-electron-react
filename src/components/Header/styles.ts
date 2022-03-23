import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 80px;

  padding: 0.5rem;

  display: flex;
  justify-content: flex-end;
`

export const Settings = styled.button`
  height: 45px;
  width: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 0.25rem;
  transition: all 0.2s;

  &:hover {
    background: rgba(150, 150, 150, 0.4);
  }
`

export const ContentModal = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h3 {
    color: black;
  }

  > div {
    display: flex;
    flex-direction: column;

    p {
      color: #aaa;
    }
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    font-size: 2rem;

    background: transparent;
    border: 0;
  }

  span {
    padding: 4px 8px;
    border: 1px solid black;
    border-radius: 0.25rem;
    color: black;
    cursor: pointer;

    &:hover {
      background: #ccc;
    }
  }

  .ReactModal__Content {
    height: 200px!important;
  }
`
