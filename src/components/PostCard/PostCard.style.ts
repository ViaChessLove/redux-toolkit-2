import styled from "styled-components";
import PostCard from "./PostCard";

export const PostCardStyled = styled(PostCard)`
    border: 5px dashed white;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        border: 5px solid hsl(0, 4%, 85%);
        color: hsl(0, 4%, 85%);
    }
`