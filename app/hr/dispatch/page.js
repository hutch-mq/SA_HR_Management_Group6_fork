'use client';
import { useState } from 'react';

export default function Page(){
  const [round,setRound]=useState('Mid-year 2025');
  const [count,setCount]=useState(128);
  function send(){ alert('สร้าง Evaluation + Scores และเตรียมแจ้งหัวหน้า'); }
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Dispatch</h2>
      <div className="section">
        <div className="settings-grid">
          <input className="input" value={round} onChange={e=>setRound(e.target.value)} />
          <input className="input" type="number" value={count} onChange={e=>setCount(Number(e.target.value||0))} />
        </div>
        <p className="help">ตรวจซ้ำในรอบเดียวกันก่อนสร้าง</p>
        <button className="btn" onClick={send}>ส่งแบบประเมิน</button>
      </div>
    </div>
  );
}
