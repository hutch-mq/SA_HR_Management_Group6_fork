
export default function KpiCards({ cards }){
  return (
    <div className="cards">
      {cards.map(c => (
        <div className="card" key={c.k}>
          <div className="muted">{c.k}</div>
          <div style={{fontSize:28,fontWeight:700,marginTop:8,color:'#0f2f75'}}>{c.v}</div>
        </div>
      ))}
    </div>
  );
}
