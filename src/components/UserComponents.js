import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Top = styled.div`
    width: 100%;
    height: 50px;
    margin: 10px 0px 8px;
    display: flex;
    justify-content: space-between;

    p{
        font-family: Raleway;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }
    ion-icon {
        font-size: 30px;
        --ionicon-stroke-width: 40px;
        color: white;
    }
`
const Mid = styled.div`
    width: 100%;
    height: 446px;
    padding: 15px 15px 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 5px;

    p{
        display: ${(props) => props.haveBody ? "none" : ""};
        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;
        color: #868686;
    }
    object{
        width:100%;
        height:45px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;

    }
    h3{
        font-family: Raleway;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #000000;

    }
    h4{
        font-family: Raleway;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: right; 
        color:${(props) => props.negOrPosi ? "#03AC00" : "#C70000"}; 
    }
    

`
const Botton = styled.div`
width: 100%;
padding-top: 15px;
display: flex;
justify-content: space-between;


`
const RegisterButton = styled.div`
    width: 165px;
    height: 114px;
    display: flex;
    padding: 10px;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    background: #A328D6;
    border-radius: 5px;

    p {
        font-family: Raleway;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;

    }
    ion-icon {
        font-size: 25px;
        color: white;
    }
`
const Input = styled.input`
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    padding: 13px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
    color: #000000;
    font-size: 20px;
    line-height: 23px;

    ::placeholder {
        color: #000000;
        opacity: 1;
    }
`

const Button = styled.button`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    
    cursor: pointer;
    
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    text-align: center;
    
    background: #A328D6;
    color: #FFFFFF;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
 
`
const Mov =styled.div `
    width: 100%;
    display: flex;
    justify-content:space-between;
    margin-top: 20px;

    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
`
const Descr = styled.div `
display: flex;
    h1{
        width: 48px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        color: #C6C6C6;
    }
`
const Value = styled.div `
    color: ${(props) => props.op ? "#03AC00" : "#C70000"};
`
const Extract = styled.div `
    height: 100%;
    width: 100%;
    white-space: nowrap;
    overflow-x:scroll;
    overflow-y:hidde;
    position: relative;
    -webkit-transform: translateZ(0);
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.haveBody ? " flex-start" : "center"};

`

export {
    Container,
    Top,
    Mid,
    Botton,
    RegisterButton,
    Form,
    Input,
    Button,
    Mov,
    Descr,
    Value,
    Extract
}