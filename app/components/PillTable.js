
export default function PillTable({ headers=[], rows=[] }){
  return (
    <div className="table-card">
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:12,marginBottom:8,color:'#64748B'}}>
        {headers.map(h => (<strong key={h}>{h}</strong>))}
      </div>
      {rows.map((r,i)=>(
        <div className="pill" key={i}>
          <div>{r[0]}</div><div>{r[1]}</div><div>{r[2]}</div><div>{r[3]}</div><div>{r[4]}</div>
        </div>
      ))}
    </div>
  );
}
