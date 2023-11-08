import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextInput from '@/components/Inputs';
import { Button } from '@/components/index.js';

export const Root = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledGrid = styled.div`
  height: fit-content;
  width: auto;
  padding: 37px !important;
  border-radius: 8px;
  margin-top: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const StyledText = styled.h3`
  text-align: center;
  font-size: 1.4rem !important;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const LinkText = styled(Link)`
  text-align: center;
  font-size: 1rem !important;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  color: #008c96;
  &:hover {
    color: #008c96;
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div``;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledTextField = styled(TextInput)``;
