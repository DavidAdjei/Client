import React, { useState } from 'react';
import { useUser } from '../../context/userContext';
import UserInput from '../../features/UserInput';



export default function SignUp() {
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signin } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!name || !email || !password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        } else {
            signin(name, email, password, setLoading, setError)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <UserInput
                    type="text"
                    value={name}
                    name="name"
                    placeholder="Enter Your Username"
                    setValue={setUsername}
                />
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
