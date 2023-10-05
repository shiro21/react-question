import styled from 'styled-components';

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