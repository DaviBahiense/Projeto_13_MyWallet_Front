import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Home() {
    const [user, setUser] = useState(null);
    const { auth } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();


/*     useEffect(() => {
        if (!auth || !auth.token) {
          navigate("/");
          return;
        }
    
        handleLoadPage();
      }, []); */

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
    <>
    </>
)

}