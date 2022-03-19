import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    margin-bottom: 4rem;
  }
`

export const Quantity = styled.div`
  display: flex;
  gap: 0.2rem;
  button {
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.2rem;
    
    color: #ddd;
    
    border-radius: 0.5rem;
    border: 0;
    background: transparent;
    
    transition: all 0.2s;
    
    &:hover {
      background: rgba(150,150,150,0.4);
    }
  }
`

export const Timer = styled.div`
  margin: 1rem 0 4rem 0;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  line-height: 0rem;
  font-size: 5rem;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    padding: 5px 10px;
    font-size: 1.4rem;

    border: 1px solid rgba(150,150,150,0.7);
    border-radius: 0.25rem;
    background: transparent;
    color: #fff;

    transition: all 0.2s;
    
    &:hover {
      background: rgba(150,150,150,0.2);
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`