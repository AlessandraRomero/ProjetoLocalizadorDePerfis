import styled from "styled-components";

export const CardUserStyle = styled.div`
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    padding: 20px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color:#6959CD;
    border-radius:10px;
    img{
        border-radius: 50%;
        width: 90px;
    }
    h3{
        color: #fff;
        font-weight: 900;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
`