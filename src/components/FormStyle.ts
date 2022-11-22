import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormStyle = styled.div`
    width: 50%;
    margin: 0;
    padding: 30px;
    display: flex;
    flex-direction: column;

    input{
        margin-bottom: 15px;
        width: 100%;
        height: 44px;
        padding: 0 8px;
    }

    button{
        width: 100%;
        background-color: #6A5ACD;
        color: #ffffff;
    }
`