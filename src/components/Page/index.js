import styled from '@emotion/styled'

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 80%;
    margin-bottom: 50px;
    & , *{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


`

export const Page = ({children}) => {
    return <Wrapper>
        <Container>
            {children}
        </Container>
    </Wrapper>
}