'use client';
import { useState } from 'react';

export default function Page(){
  const [q,setQ]=useState('');
  const data=[['EMP001','Somchai','HR','-'],['EMP210','Pim','Sales','VP Sales']];
  const list=data.filter(r=>r.join(' ').toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Employees</h2>
      <div className="toolbar">
        <input className="input-sm" placeholder="ค้นหา ชื่อ/รหัส/แผนก" value={q} onChange={e=>setQ(e.target.value)} />
        <a className="btn-ghost" href="#">เพิ่ม/แก้ไข</a>
        <a className="btn-ghost" href="#">ตรวจความพร้อม (Ready Check)</a>
      </div>
      <div className="table-card">
        <div className="pill" style={{gridTemplateColumns:'1fr 2fr 1fr 1fr 120px'}}>
          <strong>รหัส</strong><strong>ชื่อ</strong><strong>แผนก</strong><strong>หัวหน้า</strong><span/>
        </div>
        {list.map((r,i)=>(
          <div key={i} className="pill" style={{gridTemplateColumns:'1fr 2fr 1fr 1fr 120px'}}>
            <div>{r[0]}</div><div>{r[1]}</div><div>{r[2]}</div><div>{r[3]}</div>
            <div><a className="btn" href="#">โปรไฟล์</a></div>
          </div>
        ))}
      </div>
    </div>
  );
}
