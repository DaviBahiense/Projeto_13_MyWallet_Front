import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import  { Container, Top, Mid, Botton, RegisterButton, Mov, Descr, Value, Extract } from "../../components/UserComponents"
import { boolean } from "yup";

export default function Home() {
    const [user, setUser] = useState(null);
    const { auth, logOut } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth || !auth.token) {
        navigate("/");
        return;
        } 
        handleLoadPage()
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

let data = user.movimentation
let mov = []
for (let i = 0; i < data.length; i++) {
  let clearC =data[i].value.replace("C", '')
  let clearD =data[i].value.replace("D", '')
  
  if (data[i].value.includes("C")){
    mov.push({
      day: data[i].day,
      text: data[i].text,
      value: clearC,
      op: true,
      id: i
    }) 
  } else{
    mov.push({
      day: data[i].day,
      text: data[i].text,
      value: clearD,
      op: false,
      id: i
    }) 
  }
}
let total = 0
mov.map((i) =>(i.op? total += parseFloat(i.value) : total -= parseFloat(i.value)) )

let negOrPosi = boolean
if (total > 0) {
  negOrPosi = true
}else{ negOrPosi = false}

function enter() { navigate("/enterreg")}
function out() { navigate("/exitreg")}
function singOut() {
    logOut()
    navigate("/")
}
return (
   <Container>
     <Top>
        <p>Ola, {user.name}</p>
        <ion-icon name="log-out-outline" onClick={singOut}></ion-icon>
     </Top>
     <Mid haveBody={mov} negOrPosi={negOrPosi}>
        <Extract>
          {mov.map((info)=>(
              <Mov key={info.id}>
                <Descr>
                  <h1>{info.day}</h1>
                  <h2>{info.text}</h2>
                </Descr>

                <Value op={info.op}>
                  {info.value}
                </Value>
              </Mov>
          ))}
        </Extract>
          <object>
            <h3>Saldo</h3>
            <h4>
              {Math.abs(total)}
            </h4>
          </object>
        <p>Não há registros de<br/>
            entrada ou saída</p>
     </Mid>
     <Botton>
       <RegisterButton onClick={enter}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova <br /> entrada</p>
       </RegisterButton>
       <RegisterButton onClick={out}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova <br /> saída</p>
       </RegisterButton>

     </Botton>
   </Container>
)

}