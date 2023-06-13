import { css } from 'lit';

export const GFT_BUTTON_STYLE = css`
  button {
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    color: white;
    background-color: #4078c0;
  }
  button:hover {
    background-color: #5093e1;
  }
  button:active {
    background-color: #305d8a;
  }
  button[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;
