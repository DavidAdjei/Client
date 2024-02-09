import React, { useContext, createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();


export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = async (email, password, setLoading, setError) => {
        try {
            const { data } = await axios.post(`http://localhost:8000/signin`, {
                email,
                password,
            });

            if (!data.error) {
                setLoading(false);
                console.log("Log In successful");
                alert('Log In successful');
                navigate("/");
                setUser(data.user);
            } else {
                setError(data.error);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setError('An error occurred while logging in. Please try again later.');
            setLoading(false);
        }
        ;
    }
    
    const signin = async (name, email, password, setLoading, setError) => {
        try {
            const { data } = await axios.post(`http://localhost:8000/signUp`, {
                name,
                email,
                password,
            });

            if (!data.error) {
                setLoading(false);
                console.log("Sign up successful");
                alert('Sign Up successful');
                navigate('/')
                setUser(data.user);
            } else {
                setError(data.error);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setError('An error occurred while signing up. Please try again later.');
            setLoading(false);
        }
    }

    

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, signin, logout }} >
            {children}
        </UserContext.Provider>
    )
}
