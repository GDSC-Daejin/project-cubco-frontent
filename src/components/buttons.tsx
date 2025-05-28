import styled from 'styled-components';
import { colors } from '../styles/colors';

export const BaseBtn = styled.button<{ width?: string }>`
  width: ${(props) => props?.width || '100%'};
  height: 44px;

  color: ${colors.White};
  background-color: ${colors.Main};

  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
`;
