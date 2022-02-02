import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 /*  img{
    margin-top: 65px;
  }

  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  } */
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 30px 0 25px;
`

const Input = styled.input`
  width: 326px;
  height: 58px;
  margin-bottom: 13px;
  padding: 15px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  
  color: #000000;
  font-size: 20px;
  line-height: 23px;

  &::placeholder{
    color: #000000;
  }
`

const Button = styled.button`
  width: 326px;
  height: 58px;
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

const StyledLink = styled(Link)`
  margin-top: 22px;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  color: #FFFFFF;
`

export {
    Container,
    Form,
    Input,
    Button,
    StyledLink
}