import styled from "styled-components";



export const Container = styled.div`
    padding: 16rem 8rem 0;

    strong{
        color:${props=>props.theme["green-200"]};
    }

`

export const SectionText = styled.section`

    color: ${props=>props.theme.white};

    div {
        p {
            font-size: 3.75rem;
        }
        strong {
            color: ${props=>props.theme["green-200"]};
        }
    }
`

export const SectionImage = styled.section`
    img {
        width: 21.875rem;
    }

`

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 0 20rem;
`

export const MainBox = styled.main`
    display: flex;
    margin: 0 0 5rem;
`

export const MainSectionText = styled.section`

    text-align: center;
    h1 {
        font-size: 4rem;
        text-align: center;
        color: ${props=>props.theme.white};
        margin: 0 0 3rem;
        font-weight: 400;
    }

    p {
        color: ${props=>props.theme.white};
        margin: 0 0 1.5rem;
        font-weight: bold;
        letter-spacing: 1px;
    }
`

export const MainSectionImage = styled.section`

`

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props=>props.theme.white};

    margin: 0 0 6rem;

    h1 {
        font-size: 2.7rem;
    }
    p {
        font-weight: bold;
        letter-spacing: 1px;
    }
`

export const LinkBox = styled.section`
        display: flex;
        gap: 2rem;
        margin: 2rem 0 0;
    a {
        background: ${props=>props.theme.white};
        border-radius: 50%;
        padding: 0.7rem;
        line-height: 0;

        color: ${props=>props.theme["green-600"]};

        transition: box-shadow 0.4s;
    }
    a:hover{
        box-shadow: 0px 0px 10px 0.3rem ${props=>props.theme["green-200"]};
        color: ${props=>props.theme["green-200"]};
    }
`