import React, { useState } from "react";
import "./Login_Principal.css";
//import Carrucel from "../Carrucel/Carrucel";
import LoginIngreso from "../Login_Ingreso/Login_Ingreso";
import Recuperarkey from "../Login_Recuperar/Login_Recuperar_key";
import Registrarse from "../Login_Registrarse/Login_Registrarse";
import { useEffect } from "react";
import Loading from "../../loading/Loading";
import LoginInvitado from "../Login_invitado/Login_invitado";
import RegistrarseEmpresa from "../Login_RegistrarseEm/Login_RegistrarseEm";

const LoginPrincipal = () => {
  const [logueo, setLogueo] = useState("login");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <div className="BodyLogin">
        <div className="izquierdaGeneral">
        {
         // <Carrucel className="carrucel" />
        }  
        </div>
        <div className="derechaGeneral">
          {logueo === "login" && <LoginIngreso setView={setLogueo} />}
          {logueo === "recuperarkey" && <Recuperarkey setView={setLogueo} />}
          {logueo === "registro" && <Registrarse setView={setLogueo} />}
          {logueo === "registroEmpresa" && <RegistrarseEmpresa setView={setLogueo} />}
          {logueo === "null" && <LoginInvitado setView={setLogueo} />}
        </div>
      </div>
    </div>
  );
};

export default LoginPrincipal;
