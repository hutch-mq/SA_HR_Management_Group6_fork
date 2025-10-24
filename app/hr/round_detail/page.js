'use client';
import { useSearchParams } from 'next/navigation';

export default function Page(){
  const q = useSearchParams();
  const id = q.get('id') || 'R-MID-2025';
  const meta = { name:'Mid-year 2025', window:'01/06–30/06', reviewers:'หัวหน้า', scope:'ทุกแผนก' };
  const rows = [
    ['EMP-112 Somchai R.','หัวหน้า','pending','12/11/2025',''],
    ['EMP-203 Mali P.','หัวหน้า','in_progress','14/11/2025',''],
  ];
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Round Detail • {id}</h2>
      <div className="cards">
        <div className="card"><div className="muted">ชื่อรอบ</div><div style={{fontWeight:700}}>{meta.name}</div></div>
        <div className="card"><div className="muted">ช่วงเวลา</div><div style={{fontWeight:700}}>{meta.window}</div></div>
        <div className="card"><div className="muted">ผู้ประเมิน</div><div style={{fontWeight:700}}>{meta.reviewers}</div></div>
        <div className="card"><div className="muted">ขอบเขต</div><div style={{fontWeight:700}}>{meta.scope}</div></div>
      </div>

      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>พนักงาน</strong><strong>ผู้ประเมิน</strong><strong>สถานะ</strong><strong>กำหนด</strong><strong>หมายเหตุ</strong>
        </div>
        {rows.map((r,i)=>(
          <div key={i} className="pill">
            <div>{r[0]}</div><div>{r[1]}</div><div>{r[2]}</div><div>{r[3]}</div><div>{r[4]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
