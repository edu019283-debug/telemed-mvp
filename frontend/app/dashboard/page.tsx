'use client'
import { useEffect, useState } from 'react'
export default function Dashboard() {
  const [items, setItems] = useState<any[]>([])
  useEffect(()=>{(async ()=>{const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/appointments/`); setItems(await r.json())})()},[])
  return (<div>
    <h1>Meus agendamentos</h1>
    <ul>{items.map((x:any)=>(<li key={x.id}>{x.channel} — {x.scheduled_start} — {x.status}</li>))}</ul>
  </div>)
}