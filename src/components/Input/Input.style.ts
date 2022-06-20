import styled, { ThemedStyledProps } from "styled-components";
import Input from './Input';

export const InputPost = styled(Input)`
    width: 100%;
    background-color: ${(props: ThemedStyledProps<any, any>) => props.backgroundColor?  props.backgroundColor:
     'green' };
`