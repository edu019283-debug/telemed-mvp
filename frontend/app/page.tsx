export default function Page() {
  return (
    <section>
      <h1 style={{fontSize:28, marginBottom:8}}>A saúde ao alcance de todos</h1>
      <p>Teleatendimentos sociais via WhatsApp, chat do site ou videochamada.</p>
      <div style={{display:'flex', gap:8, marginTop:16}}>
        <a href="/schedule" style={{padding:'10px 14px', background:'#111', color:'#fff', borderRadius:12, textDecoration:'none'}}>Agendar</a>
        <a href="/signup" style={{padding:'10px 14px', border:'1px solid #ccc', borderRadius:12, textDecoration:'none'}}>Cadastrar-se</a>
      </div>
    </section>
  );
}
