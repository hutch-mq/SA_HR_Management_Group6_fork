'use client';
import { useState } from 'react';

export default function Page(){
  const [mini,setMini]=useState(false);
  function start(e){ e.preventDefault(); alert('สร้างรอบ draft + schedule mini-review'); } // UC1, UC5
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Rounds</h2>
      <form className="section" onSubmit={start}>
        <div className="settings-grid">
          <input className="input" placeholder="ชื่อรอบ (เช่น Mid-year 2025)"/>
          <input className="input" type="date" />
          <input className="input" type="date" />
          <input className="input" placeholder="คำอธิบาย"/>
        </div>
        <label className="row" style={{marginTop:8}}>
          <input type="checkbox" checked={mini} onChange={e=>setMini(e.target.checked)} />
          <span>เปิด mini-review ทุก 2 เดือน</span>
        </label>
        <button className="btn" style={{marginTop:8}}>เริ่มรอบประเมิน</button>
      </form>

      <div className="table-card">
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
          <strong>ชื่อรอบ</strong><strong>ช่วงเวลา</strong><strong>สถานะ</strong><strong>การตั้งค่า</strong>
        </div>
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
          <div>Mid-year 2025</div><div>01/06–30/06</div><div>draft</div><div><a className="btn" href="/hr/criteria">กำหนดเกณฑ์</a></div>
        </div>
      </div>
    </div>
  );
}
