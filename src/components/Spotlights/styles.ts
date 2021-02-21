import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;
`;

export const Box = styled.div`
    width: 200px;
    height: 400px;
    margin: 10px;
    background: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;

        .top {
            margin-bottom: 10px;

            img {
                height: 180px;
                width: auto;
            }

            h2 {
                padding: 0;
                font-size: 1rem;
                font-weight: 500;
            }

            h3 {
                padding: 0;
                font-size: 1rem;
                font-weight: 400;
                color: #000;
                opacity: 0.6;
            }
        }

        .bot {
            margin-top: 10px;
            p {
                margin-bottom: 20px;
            }

            a {
                text-decoration: none;
                color: white;
                font-weight: 600;
                width: auto;
                height: auto;
                padding: 10px;
                border-radius: 5px;
                background: #FA6628;
                position: relative;
                bottom: 0px;
            }
        }
    }
    
`
