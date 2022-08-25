/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(false);//Estado de loading para outlet de PageLoading
    const navigate = useNavigate();

    useEffect(() => {
       const token = localStorage.getItem('@TOKEN');

       async function autoLogin(){
        setUserLoading(true); //
        try {
            const response = await api.post('user/autologin', {},{
                headers: {
                    auth: token,
                }
            })
            setUser(response.data.user); // Nunca esquecer de setar estado após requisição
            navigate('/dashboard');
        } catch (error) {
            //Limpa localStorage e direciona para token caso erro de requisição ou token inválida
            localStorage.removeItem('@TOKEN');
            navigate('/');
        } finally {
            setUserLoading(false);   
        }
       }

       //Não executa a função de autoLogin caso não houver token
       if(token){
        autoLogin(); 
       }       
    }, [])

    async function registerUser(formData, setLoading){
        try {
            setLoading(true);
            await api.post('user', formData); //Cadastrado
            toast.success('Usuário cadastrado com sucesso!');
            //Timeout para redirecionar após o ocultamento do toast
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    async function loginUser(formData, setLoading){
        try {
            setLoading(true);
            const response = await api.post('user/login', formData);
            setUser(response.data.user);
            localStorage.setItem('@TOKEN', response.data.token);
            //Timeout para redirecionar após o ocultamento do toast
            toast.success('Login efetuado com sucesso!');
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    function logoutUser(){
        setUser(null);
        localStorage.removeItem('@TOKEN');
        navigate('/');
    }

    return(
        <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser, userLoading }}>
            {children}
        </UserContext.Provider>
    )
}