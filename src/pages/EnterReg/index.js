import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

import { exitAndRegisterSchema } from '../../validation/formValidation'
import  {
    Container,
    Top,
    Input,
    Button,
    Form
  } from "../../components/UserComponents"

export default function EnterReg(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(exitAndRegisterSchema)
    }) 

    const { auth } = useAuth();

    
    const navigate = useNavigate()

    async function handleEnterReg(body) {
        body.value = "C" + body.value
        try {
            await api.entrace(body, auth.token)

            navigate('/home')
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit((body) => handleEnterReg(body))} >

                <Top>
                    <p>Nova Entrada</p>
                </Top>
                <Input
                    {...register ('value')}
                    type="number"
                    placeholder="Valor"
                    name="value"
                />
                <p>{errors.value?.message}</p>
                <Input
                    {...register ('text')}
                    type="text"
                    placeholder="Descrição"
                    name="text"
                />
                <p>{errors.text?.message}</p>

                <Button>
                    Salvar entrada
                </Button>
            </ Form>
        </Container>
        )
}

    