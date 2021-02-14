import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    width: 180px;
    height: 400px;
    margin: 40px;
    background: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        img {
        /* width: 260px; */
        height: 150px;
        }

        h2 {
            font-size: 0.8rem;
            font-weight: 700;
        }
    }
    
`
