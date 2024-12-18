import { useState, FormEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';

import { auth } from '../../services/firebaseconnection';
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/admin', { replace: true })
        })
        .catch((error) => {
            console.log("Erro ao fazer o login:")
            console.log(error)
        })
    }

    return (
        <main className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
                    Link
                    <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">App</span>
                </h1>
            </Link>
            <h1>Página Login</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    placeholder="Digite o seu e-mail"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                />

                <Input
                    placeholder="Digite a sua senha"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    required
                />

                <button className="h-9 bg-purple-600 rounded border-0 text-lg font-medium text-white hover:bg-purple-500 transition-all">Acessar</button>
            </form>
        </main>
    )
}