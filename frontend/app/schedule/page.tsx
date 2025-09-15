'use client'
import { useState } from 'react'
export default function Schedule() {
  const [date, setDate] = useState(''); const [time, setTime] = useState(''); const [channel, setChannel] = useState('video'); const [reason, setReason] = useState('');
  async function handleCreate() {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/appointments/`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({scheduled_start: `${date}T${time}:00Z`, channel, reason})});
    const data = await r.json(); alert('Agendamento mock. Resposta: ' + JSON.stringify(data));
  }
  return (<div>
    <h1>Agendar</h1>
    <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
    <input type="time" value={time} onChange={e=>setTime(e.target.value)} />
    <select value={channel} onChange={e=>setChannel(e.target.value)}>
      <option value="whatsapp">WhatsApp</option>
      <option value="chat">Chat</option>
      <option value="video">Vídeo</option>
    </select>
    <input placeholder="motivo" value={reason} onChange={e=>setReason(e.target.value)} />
    <button onClick={handleCreate}>Confirmar</button>
  </div>)
}