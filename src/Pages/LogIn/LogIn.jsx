import React, { useState } from 'react';
import UserInput from '../../features/UserInput';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';


export default function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        } else {
            login(email, password, setLoading, navigate, setError);
        }

        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <UserInput
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Enter Your Email"
                    setValue={setEmail}
                />
                <UserInput
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Enter Your Password"
                    setValue={setPassword}
                />
                <input type="submit" disabled={loading} />
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}
