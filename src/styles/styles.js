import styled from 'styled-components';

export const AppContainer = styled.div`
    margin: 50px 75px 0;
    border: 1px solid white;
    box-shadow: 0 0 25px rgba(0,0,0,0.5);
    font-family:'Hanalei Fill', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;


export const CabeceraContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#66EFC2;
    border: 3px solid #C4D1B9;
    padding: 1rem;
    margin-bottom: 1rem;
    
        @media (max-width: 842px) {
            text-align: center;
        }
    
    span {
        background-color: bl;
        color: white;
        padding: 3px 5px;
        border-radius: 5px;
    }
`;

export const ListadoContainer = styled.section`
    display: flex;
    flex-direction: row-reverse ;
    justify-content: space-between;
    padding: 1rem;
    @media (max-width: 100px) {
        flex-wrap: wrap;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ddd;
    border: 5px solid #e5e5e5;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: %;
    @media (max-width: 1500px) {
        width: 40%;

    }
    @media (max-width: 842px) {
        width: 90%;
    }
    h3 {
        text-align: center;
        font-size: 2.0rem;
    }
    img {@media (max-width: 1900px) {
        width: 80%;
    }}
    p {
        font-size: 1rem;
    }
    h4 {
        font-size: 2.0rem;
        text-align: center;
        margin : 7px;
    }
    h5 {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 7px;
        span {
            background-color: rgb(255, 178, 178);
            padding: 3px;
            font-weight: lighter;
            color: rgb(155, 0, 0);
            border-radius: 3px;
        }
    }
`;

export const ProductButton = styled.button`
    background-color: #D5BAA5;
    border: 1px solid #e5e5e5;
    text-transform: uppercase;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
    &:disabled {
        background-color: rgb(255, 178, 178);
        cursor: not-allowed;
    }
`;




