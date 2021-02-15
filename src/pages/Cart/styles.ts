import styled from 'styled-components';

export const Container = styled.div`
    background: #EEE;

`;

export const BuyCart = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: 20px;
    
    img {
        margin-left: 20px;
        height: 100px;
    }

    h2 {
        font-size: 1rem;
        width: 300px;
    }

    .add {
        /* position: absolute; */
        /* right: 500px; */
        display: flex;
        margin-right: 0px;
    }

    button {
        width: 25px;
    }

    .btn-delete {
        width: auto;
        margin-right: 20px;
    }

    .total {
        margin-right: 50px;
    }
`