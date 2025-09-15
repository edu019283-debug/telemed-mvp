export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{fontFamily: 'system-ui, sans-serif', margin: 0}}>
        <header style={{position:'sticky', top:0, background:'#fff', borderBottom:'1px solid #eee', padding:'12px 16px', display:'flex', justifyContent:'space-between'}}>
          <div><b>Telemed Social</b> · MVP</div>
          <nav style={{display:'flex', gap:8}}>
            <a href="/">Home</a>
            <a href="/login">Entrar</a>
            <a href="/signup">Cadastro</a>
            <a href="/schedule">Agendar</a>
            <a href="/dashboard">Paciente</a>
            <a href="/room/demo">Sala</a>
          </nav>
        </header>
        <main style={{maxWidth:1000, margin:'16px auto', padding:'0 16px'}}>{children}</main>
        <footer style={{borderTop:'1px solid #eee', padding:'12px 16px', fontSize:12, color:'#666'}}>© {new Date().getFullYear()} Projeto Social — LGPD-first (wireframe)</footer>
      </body>
    </html>
  );
}
