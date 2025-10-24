'use client';
import Link from 'next/link';
export default function Page(){
  const queue = [
    { id:'EMP-112', name:'Somchai R.', round:'Mid-year 2025', due:'12/11/2025' },
    { id:'EMP-203', name:'Mali P.',    round:'Mid-year 2025', due:'14/11/2025' },
  ];
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Score Entry</h2>
      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 120px',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>พนักงาน</strong><strong>รอบ</strong><strong>กำหนด</strong><span/>
        </div>
        {queue.map(x=>(
          <div key={x.id} className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 120px'}}>
            <div>{x.id} {x.name}</div><div>{x.round}</div><div>{x.due}</div>
            <div><Link className="btn" href={`/hr/round_detail?id=${encodeURIComponent('R-MID-2025')}`}>เปิดรอบ</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}
