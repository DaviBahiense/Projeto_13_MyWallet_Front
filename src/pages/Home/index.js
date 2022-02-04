import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import  {
  Container,
  Top,
  Mid,
  Botton,
  RegisterButton
} from "../../components/UserComponents"

export default function Home() {
    const [user, setUser] = useState(null);
    const { auth } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        if (!auth || !auth.token) {
        navigate("/");
        return;
        } 
    
        handleLoadPage();
      }, []);

      async function handleLoadPage() {
        try {
          const responseUser = await api.getUser(auth.token);
          setUser(responseUser.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          alert("Erro!");
        }
      }

    if (isLoading) {
    return <h1>Carregando...</h1>;
    }

return (
   <Container>
     <Top>
        <p>Ola, Fulano</p>
        <ion-icon name="log-out-outline"></ion-icon>
     </Top>
     <Mid>
        <p>Não há registros de<br/>
            entrada ou saída</p>
     </Mid>
     <Botton>
       <RegisterButton>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova <br /> entrada</p>
       </RegisterButton>
       <RegisterButton>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova <br /> saída</p>
       </RegisterButton>

     </Botton>
   </Container>
)

}