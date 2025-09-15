'use client'
import { useState } from 'react'
export default function Signup() {
  const [full_name, setName] = useState(''); const [email, setEmail] = useState(''); const [password, setPass] = useState('');
  async function handleSignup() {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/register/`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({full_name: full_name, email, password})});
    const data = await r.json(); alert('Cadastro mock. Resposta: ' + JSON.stringify(data));
  }
  return (<div>
    <h1>Cadastro</h1>
    <input placeholder="nome" value={full_name} onChange={e=>setName(e.target.value)} />
    <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder="senha" type="password" value={password} onChange={e=>setPass(e.target.value)} />
    <button onClick={handleSignup}>Criar conta</button>
  </div>)
}