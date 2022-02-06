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

export default function ExitReg(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(exitAndRegisterSchema)
    }) 
    
    const navigate = useNavigate()

    const { auth } = useAuth();


    async function handleExitReg(body) {
        body.value = "D" + body.value
        try {
            await api.entrace(body, auth.token)

            navigate('/home')
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <Container>

            <Form onSubmit={handleSubmit((body) => handleExitReg(body))} >
                <Top>
                    <p>Nova Saída</p>
                </Top>
                <Input
                    {...register ('value')}
                    type="number"
                    step="0.01"
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
                    Salvar saída
                </Button>
            </ Form>
        </Container>
        )
}