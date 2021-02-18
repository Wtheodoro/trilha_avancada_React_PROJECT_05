import styled from 'styled-components';

export const Container = styled.div`
    background: #EEE;
    min-height: 84vh;

    button {
        padding: 5px;
        background: #FF4B00;
        color: white;
        border: 1px solid #FF4B00;
        border-radius: 5px;

    }

`;

export const BuyCart = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: 5px;
    
    img {
        margin-left: 20px;
        height: 100px;
    }

    h2 {
        font-size: 1rem;
        width: 300px;
    }

    .add {
        display: flex;
        margin-right: 0px;
        width: 100px;
        height: 30px;
        justify-content: space-between;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        /* opacity: 0.7; */
        border-radius: 5px;

        button {


            &:nth-child(1) {
                border-radius: 5px 0 0 5px;
            }

            &:nth-child(3) {
                border-radius: 0 5px 5px 0;
            }
        }

        p {
            display: flex;
            justify-content: center;
            text-align: center;
        }
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

export const End = styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    background: white;
    width: 300px;
    justify-content: space-around;
    border-radius: 5px;

`