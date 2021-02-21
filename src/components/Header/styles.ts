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
            width: 500px;
            height: 30px;
        }

        svg {
            font-size: 25px;
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
        }
        .search {
            display: flex;
            
            svg {
                background: red;
                padding: 5px;
                background: #FEAF44;
                border-radius: 0 5px 5px 0;
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
        margin-left: -40px;

        li {
            margin-left: 40px;
            list-style-type: none;

            &:hover {
                cursor: pointer;
            }
        }
    }

`

export const Border = styled.div`
    height: 5px;
    background: #FEAF44;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
`