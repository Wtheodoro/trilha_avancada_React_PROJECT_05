import styled from 'styled-components';

export const Container = styled.div`
    height: 87vh;
    background: #EEE;
    display: flex;
    justify-content: center;

    .form {
        display: flex;
        flex-direction: column;
        background: white;
        width: 300px;
        height: 500px;
        margin-top: 20px;
        text-align: center;

        h1 {
            text-transform: uppercase;
            margin-top: 20px;
        }

        input {
            background: none;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #EEE;
            padding: 14px 10px;
            width: 200px;
            outline: none;
            border-radius: 24px;
            transition: 0.25s;

            &:focus {
                width: 280px;
                border-color: #FEAF44;
            }

           
        }

        input[type="submit"] {
            background: none;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #FEAF44;
            outline: none;
            transition: 0.25s;
            cursor: pointer;

            &:hover {
                background: #FEAF44;
            }
        }
    }
`;
