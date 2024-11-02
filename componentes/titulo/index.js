import styled from "styled-components"

export const Titulo = styled.h2`
    color:${props => props.color || '#302d66'};
    font-size: ${props => props.size || '18px'};
    text-content: ${props => props.direction || 'center'};
    background-color: #ffffff;
    width: 100%;
    margin-top: 0;
    height: 60px;
`
