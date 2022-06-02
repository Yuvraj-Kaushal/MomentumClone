import styled from "styled-components";

export const QuoteContainer = styled.div`
    position: fixed;
    text-align: center;
    bottom: 0;
    width: 100%;
    left: 50%;
    margin-left: -300%;

    @media screen and (max-width: 600px) {
        width: 350%;
        margin-left: -175%;
    }
`;

export const Text = styled.p`
    font-size: 1.2rem;
`;