import styled from '@emotion/styled';
import { IconBrandGithub } from '@tabler/icons-react';

export const Boton = styled.button`
  --bg: #000;
  --text-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 200px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 999px;
  opacity: 0.8;
  box-shadow: #ababab 0px 7px 2px, #000 0px 8px 5px;
  &:hover {
    opacity: 1;
  }
  &:active {
    top: 4px;
    box-shadow: #0099ff 0px 5px 2px, #000 0px 6px 5px;
  }
`;

export const Icon = styled(IconBrandGithub)`
  margin-right: 10px;
`;



