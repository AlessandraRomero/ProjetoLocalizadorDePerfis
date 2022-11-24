import styled from "styled-components";

export const CardUserStyle = styled.div`
    width: 50%;
    height: 200px ;
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