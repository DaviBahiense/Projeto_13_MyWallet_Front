import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import {registerSchema} from '../../validation/formValidation'
import api from "../../services/api";
import Logo from '../../assets/logo.png'
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Register() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(registerSchema)
    }) 
    const navigate = useNavigate()

    async function handleRegister(body) {
        if (body.password !== body.samePass) {
            alert('As senhas não conferem')
            return
        } else{
            delete body.samePass
        }

        try {
          await api.registerUser(body)
          navigate("/");
        } catch (error) {
          alert('Erro, tente novamente');
        }
      }

    return (
        
        <Container>
            <img alt="logo" src={Logo} />

            <Form onSubmit={handleSubmit((body) => handleRegister(body))}>
                <Input
                    {...register ('name')}
                    type="text"
                    placeholder="Nome"
                    name="name"
                />
                <p>{errors.name?.message}</p>
                <Input
                    {...register ('email')}
                    type="text"
                    placeholder="E-mail"
                    name="email"
                />
                <p>{errors.email?.message}</p>
                <Input
                    {...register ('password')}
                    type="password"
                    placeholder="Senha"
                    name="password"
                />
                <p>{errors.password?.message}</p>
                <Input
                    {...register ('samePass')}
                    type="password"
                    placeholder="Confirme a Senha"
                    name="samePass"
                />
                <Button>
                    Cadastrar
                </Button>
            </Form>
            <StyledLink to="/">
                Já tem uma conta? Entre agora!
            </StyledLink>
        </Container>
    )
}