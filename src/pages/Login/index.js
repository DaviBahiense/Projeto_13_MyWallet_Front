import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../../assets/logo.png'
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Login() {


    return (
        <Container>
            <img alt="logo" src={Logo} />

            <Form /* onSubmit={handleSubmit} */>
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
                    value={formData.password} */
                    />
                
                <Button>
                    Entrar
                </Button>
            </Form>

            <StyledLink to="/register">
                Primeira vez? Cadastre-se!
            </StyledLink>
        </Container>
    )
}