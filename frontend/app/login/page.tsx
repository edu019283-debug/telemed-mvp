'use client'
import { useState } from 'react'
export default function Login() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  async function handleLogin() {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/jwt/create/`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, password})});
    const data = await r.json(); alert('Login mock. Resposta: ' + JSON.stringify(data));
  }
  return (<div>
    <h1>Entrar</h1>
    <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder="senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
    <button onClick={handleLogin}>Entrar</button>
  </div>)
}