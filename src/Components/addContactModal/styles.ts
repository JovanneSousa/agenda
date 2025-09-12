import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
`

export const Add = styled.div`
  background-color: ${cores.buttonColor};
  width: 400px;
  padding: 16px 24px;
  border-radius: 8px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    padding: 8px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }

  form {
    display: block;
    font-size: 20px;

    .button {
      width: 100%;
      justify-content: end;
    }

    button {
      margin-top: 8px;
      width: 32px;
      padding: 8px;
      margin-right: 8px;
      background-color: ${cores.buttonColor};
      border: 1px solid ${cores.container};
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: ${cores.container};
        transition: background-color 0.3s ease;
      }
    }

    label {
      line-height: 32px;
    }

    input {
      border: none;
      border-radius: 8px;
      padding: 4px;
      height: 32px;
      width: 70%;
      color: ${cores.container};
      font-size: 16px;

      &:focus {
        border-color: ${cores.container};
      }
    }
  }
`
