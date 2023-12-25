import styled from '@emotion/styled';

export const FeedbackOptionBtn = styled.button`
  min-width: 94px;
  padding: 12px;

  font-size: 20px;

  border: none;
  border-radius: 40px;

  color: #fff;
  background-color: #4f2ee8;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #361da5;
  }
  :active {
    background-color: #1f0592;
  }
`;
