import styled from '@emotion/styled'

const FormWrapper = styled.form`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > div{
        width: 100%;
        display: flex;
        flex-direction: column;
        & > *{
            margin: 5px;
        }
        & > div{
            width: 100%;
        }
    }
    
    @media (min-width: 600px) {
        flex-direction: row;
        & > div{
            height: 500px;
        }
        & > div:first-of-type{
            width: 65%;
            padding-top: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            & > div{
                width: 40%;
            }
        }
        & > div:last-of-type{
            width: 35%;
        }
    }
`

export const Form = ({children}) => {
    return <FormWrapper>
        {children}
    </FormWrapper>
}