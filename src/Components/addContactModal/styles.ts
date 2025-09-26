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
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`

export const Add = styled.div`
  background: ${cores.gradient2};
  width: 400px;
  padding: 16px 24px;
  border-radius: 8px;
  transform: translate(-50%, -50%) scale(0.95);
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &.visible {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

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

    .input-container {
      flex-direction: column;

      label {
        font-size: 18px;
        line-height: 32px;
      }

      input {
        border: none;
        border-radius: 4px;
        padding: 4px;
        height: 32px;
        width: 70%;
        color: ${cores.container};
        font-size: 16px;
        width: 100%;
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;

        &:focus,
        &:hover {
          outline: none;

          transform: scale(1.03);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }

    button {
      margin-top: 8px;
      width: 32px;
      padding: 8px;
      margin-right: 8px;
      background: ${cores.gradient3};
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`
