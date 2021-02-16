import styled from 'styled-components';

export const Container = styled.div`

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 40px;

        img {
            width: 170px;
        }

        input {
            width: 500px
        }

        .rightSide {
        svg {
            font-size: 25px;
            margin-right: 20px
        }

        a {
            text-decoration: none;
            color: #000;
        }

        .input {
            display: flex;
        }
    }
}
`

export const Categories = styled.div`
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 10px;

        li {
            margin-left: 30px;
        }
    }

`

export const Border = styled.div`
    height: 5px;
    background: #FEAF44;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
`