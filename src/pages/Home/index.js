import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import  { Container, Top, Mid, Botton, RegisterButton, Mov, Descr, Value, Extract } from "../../components/UserComponents"
import { boolean } from "yup";
import Swal from "sweetalert2"

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

  let total = 0
  let mov = []
  let data = user.movimentation
if(data){
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
    
    mov.map((i) =>(i.op? total += parseFloat(i.value) : total -= parseFloat(i.value)) )
    }
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

async function deleteItem(id) {

  try {

      await Swal.fire({
          title: 'Você realmente deseja deletar este registro?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#03AC00',
          cancelButtonColor: '#C70000',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não'
      }).then(async (result) => {
          if (result.isConfirmed) {
              await api.deleteRegistry(id, auth);
              handleLoadPage()
          }
      })

  } catch (error) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data}`,
      })
  }
}

return (
   <Container>
     <Top>
        <p>Ola, {user.name}</p>
        <ion-icon name="log-out-outline" onClick={singOut}></ion-icon>
     </Top>
     <Mid haveBody={data} negOrPosi={negOrPosi}>
        <Extract haveBody={data}>
          {mov.map((info)=>(
              <Mov key={info.id}>
                <Descr>
                  <h1>{info.day}</h1>
                  <h2>{info.text}</h2>
                </Descr>

                <Value op={info.op}>
                  {parseFloat(info.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  <div className="delete" onClick={() => deleteItem(info._id)} >x</div>
                </Value>
              </Mov>
          ))} 
          <p>Não há registros de<br/>
            entrada ou saída</p>
        </Extract>
          <object>
            <h3>Saldo</h3>
            <h4>
              {Math.abs(total).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h4>
          </object>
        
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