'use client'
import { useEffect, useRef, useState } from 'react'
export default function Room({ params }: any) {
  const wsRef = useRef<WebSocket | null>(null); const [messages, setMessages] = useState<string[]>([]); const [text, setText] = useState('');
  useEffect(()=>{
    const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WS_BASE}/ws/chat/${params.id}/`);
    wsRef.current = ws;
    ws.onmessage = (e)=> setMessages((prev)=>[...prev, e.data]);
    return ()=> ws.close();
  }, [params.id]);
  function send(){ wsRef.current?.send(text); setText(''); }
  return (<div>
    <h1>Sala {params.id}</h1>
    <div style={{border:'1px solid #eee', padding:8, height:200, overflow:'auto'}}>
      {messages.map((m,i)=>(<div key={i}>{m}</div>))}
    </div>
    <input value={text} onChange={e=>setText(e.target.value)} />
    <button onClick={send}>Enviar</button>
  </div>)
}
