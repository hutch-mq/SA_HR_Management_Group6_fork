import Link from 'next/link';

export default function Page(){
  const pending = [
    { id:'EMP-2101', name:'Pim S.', due:'12/11/2025', round:'Mid-year 2025' },
    { id:'EMP-2107', name:'Oak T.', due:'14/11/2025', round:'Mid-year 2025' },
    { id:'EMP-2109', name:'Fon K.', due:'15/11/2025', round:'Mid-year 2025' },
  ];
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Pending Reviews</h2>
      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 120px',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>พนักงาน</strong><strong>รอบ</strong><strong>กำหนด</strong><span/>
        </div>
        {pending.map(p=>(
          <div key={p.id} className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 120px'}}>
            <div>{p.id} {p.name}</div>
            <div>{p.round}</div>
            <div>{p.due}</div>
            <div><Link className="btn" href={`/manager/reviews/${p.id}`}>ประเมิน</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}
