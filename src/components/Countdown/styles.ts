import styled from 'styled-components'

type Props = {
  active: any
}

export const Container = styled.div`
  width: fit-content;
  height: 100vh;

  margin: 0 auto;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    margin-bottom: 4rem;
    color: #2e384d;
  }
`

export const Quantity = styled.div`
  display: flex;
  gap: 0.2rem;
  button {
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.2rem;

    color: #666666;

    border-radius: 0.5rem;
    border: 0;
    background: transparent;

    transition: all 0.2s;

    &:hover {
      background: rgba(150, 150, 150, 0.4);
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
  color: #2e384d;
`

export const ContainerButtons = styled.div<Props>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    padding: 5px 10px;
    font-size: 1.4rem;

    border: 1px solid rgba(150, 150, 150, 0.7);
    border-radius: 0.25rem;
    color: #fff;

    transition: all 0.2s;
  }

  .start {
    background: var(--green);

    &:hover {
      background: var(--darkgreen);
    }
  }

  .stop {
    background: var(--red);

    &:hover {
      background: var(--darkred);
    }
  }

  .reset {
    background: rgba(90, 90, 90, 0.6);
    
    &:hover {
      background: rgba(90, 90, 90, 0.9);
    }
  }
`
