'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, senha }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            router.push('/pages/noticias');
        } else {
            alert('Credenciais inválidas');
        }
    };

    return (
        <main className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center p-4">
            <section className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-6">
                <h2 className="text-2xl font-bold text-[#11703B] text-center">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-[#E1E3DE] rounded-md focus:ring-2 focus:ring-[#11703B] text-gray-800"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                        className="w-full p-3 border border-[#E1E3DE] rounded-md focus:ring-2 focus:ring-[#11703B] text-gray-800"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#11703B] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#199950] transition"
                    >
                        Entrar
                    </button>
                </form>
            </section>
        </main>
    );
}
