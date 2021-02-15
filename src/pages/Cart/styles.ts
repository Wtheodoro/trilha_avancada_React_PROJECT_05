import styled from 'styled-components';

export const Container = styled.div`
    background: #EEE;

`;

export const BuyCart = styled.div`
    margin: 10px 40px;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 20px;
    
    img {
        margin-left: 20px;
        height: 100px;
    }

    h2 {
        font-size: 1rem;
    }

    .price {
        margin-left: 50px
    }

    .add {
        position: absolute;
        right: 500px;
    }

    button {
        width: 25px;
    }
`