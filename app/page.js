
export default function Page(){
  return (<main className="content" style={{maxWidth:960,margin:'12px auto'}}>
    <h2 style={{color:'#0f2f75'}}>เลือกบทบาทเพื่อทดสอบ</h2>
    <div style={{display:'flex',gap:12,marginTop:12}}>
      <a className="btn" href="/auth/login">Login</a>
      <a className="btn" href="/auth/register">Register</a>
      <a className="btn" href="/dashboard">Dashboard (with cookie)</a>
    </div>
  </main>)
}
