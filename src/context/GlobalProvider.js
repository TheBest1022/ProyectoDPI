import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { conexionURL } from "../helpers/configuracion";

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useApps must be used within a GlobalContextProvider");
  }
  return context;
};

export const GlobalContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [docente, setDocente] = useState([]);
  const [psicologo, setpsicologo] = useState()
  const [recharge, setRecharge] = useState(false);
  const [tema, setTema] = useState([]);
  const [student, setStudent] = useState([]);
  const [company, setCompany] = useState([]);
  //Funciones
  const SignIn = async (user) => {
    return await axios.post(`${conexionURL}api/auth`, user);
  };
  const LogOut = () => {
    setAuth(null);
  };
  const Register = async (user) => {
    return await axios.post(`${conexionURL}api/auth/register`, user);
  };
  const registerDocente = async (user) => {
    return await axios.post(`${conexionURL}api/docente/register`, user);
  };
  const obtenerDatosDocente = async (id) => {
    try {
      const { data } = await axios.get(`${conexionURL}api/docente/names/${id}`);
      setDocente(data);
    } catch (error) {
      console.log(error);
    }
  };
  const obtenerDocente = async (id) => {
    const res = await fetch(`${conexionURL}api/docente/${id}`, {
      method: "GET",
    });

    return await res.json();
  };
  const Actualizar = async (user) => {
    return await axios.put(`${conexionURL}api/docente/update`, user);
  };
  const addTema = async (tema) => {
    return await axios.post(`${conexionURL}api/docente/tema`, tema);
  };
  const TemaId = async (id) => {
    try {
      const { data } = await axios.get(`${conexionURL}api/docente/tema/${id}`);
      setTema(data);
    } catch (error) {
      console.log(error);
    }
    return;
  };
  const BorrarTema = async (id) => {
    return await axios.delete(`${conexionURL}api/docente/delete/${id}`);
  };
  const actualizarPdf = async (Pdf) => {
    return await axios.put(`${conexionURL}api/docente/updatePdf`, Pdf);
  };
  const newMenssage = async (mensaje) => {
    return await axios.post(`${conexionURL}api/docente/mensaje`, mensaje);
  };
  const obtenerMensaje = async (id) => {
    return await axios.get(`${conexionURL}api/docente/mensaje/${id}`);
  };
  const MensajeActualizar = async (id) => {
    return await axios.put(`${conexionURL}api/docente/mensaje/update/${id}`);
  };

  //Estudiantes
  const getStudents = async (id) => {
    try {
      const { data } = await axios.get(
        `${conexionURL}api/student/company/${id}`
      );
      setStudent(data);
    } catch (error) {
      console.log(error);
    }
  };
  //Empresa
  const obtenerEscuela = async () => {
    try {
      const { data } = await axios.get(`${conexionURL}api/company`);
      setCompany(data);
    } catch (error) {
      console.log(error);
    }
    return;
  };
  //Asistencia
  const addAssistence = async (assistence) => {
    return await axios.post(`${conexionURL}api/student/assistence`, assistence);
  };

  //Psicologo


  return (
    <GlobalContext.Provider
      value={{
        auth,
        tema,
        docente,
        recharge,
        student,
        company,
        psicologo,
        SignIn,
        LogOut,
        setAuth,
        Register,
        registerDocente,
        obtenerDatosDocente,
        obtenerDocente,
        Actualizar,
        addTema,
        TemaId,
        BorrarTema,
        setRecharge,
        actualizarPdf,
        newMenssage,
        obtenerMensaje,
        MensajeActualizar,
        getStudents,
        addAssistence,
        obtenerEscuela,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
