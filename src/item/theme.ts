import styled, { createGlobalStyle } from 'styled-components';

export interface ThemeProps {
  background: string,
  text: string
}

export const lightTheme = {
    background: '#FFFFFF',
    text: '#000000',
};
  
export const darkTheme = {
    background: '#333333',
    text: '#FFFFFF',
};

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  div {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
  svg {
    stroke: ${(props) => props.theme.text}
  }
`