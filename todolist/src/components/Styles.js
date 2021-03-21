import styled from 'styled-components';


//export unnamed styled-component (exported to hooks in this case)
export const DivSC = styled.div`
    background-color: ${props => props.bgc || "white"};
    width: 100%;
    height: 100vh;
`;

export const H1S = styled.h1`
    background-color: lightgray;
    text-align: center;
    color: black;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    
`;


export const Paper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; 
`;