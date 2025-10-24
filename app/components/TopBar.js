
export default function TopBar(){
  return (
    <div className="topbar">
      <div style={{width:260}} className="brand">HR Eval</div>
      <h3 className="title">EMP001 Somchai Rakdee • HR Department</h3>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <input className="search" placeholder="Search..." aria-label="Search"/>
        <div className="icon" aria-label="Notifications">🔔</div>
        <form action="/auth/logout" method="post"><button className="btn" type="submit">Logout</button></form>
      </div>
    </div>
  );
}
