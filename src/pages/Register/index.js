import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../../assets/logo.png'
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Register() {


    return (
        <Container>
            <img alt="logo" src={Logo} />

            <Form /* onSubmit={handleSubmit} */>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                   /*  onChange={handleChange}
                    value={formData.password} */
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                   /*  onChange={handleChange}
                    value={formData.email} */
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                   /*  onChange={handleChange}
                    value={formData.email} */
                />
                <Input
                    type="password"
                    placeholder="Confirme a Senha"
                    name="password"
                   /*  onChange={handleChange}
                    value={formData.email} */
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