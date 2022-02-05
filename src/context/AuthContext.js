import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  
  const [auth, setAuth] = useState(persistedAuth);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }
  function logOut(authData) {
   
    localStorage.removeItem("auth", JSON.stringify(authData));
  }


  return (
    <AuthContext.Provider value={{ auth, login, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;