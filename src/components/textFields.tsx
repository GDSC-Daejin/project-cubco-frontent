import styled from 'styled-components';
import { colors } from '../styles/colors';

export const BaseInput = styled.input<{ width?: string }>`
  box-sizing: border-box;

  width: ${(props) => props?.width || '100%'};
  height: 44px;

  color: ${colors.Black};
  background-color: ${colors.White};

  border: 1px solid ${colors.Gray};
  border-radius: 8px;
  outline-color: ${colors.Black};

  font-size: 16px;
  font-weight: bold;
`;
