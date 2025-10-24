'use client';
import { useState } from 'react';

export default function Page(){
  const [mode,setMode]=useState('fixed'); // fixed | curve
  function simulate(){ alert('จำลองกระจายเกรด'); }
  function confirm(){ alert('คำนวณจริง + บันทึกเกรด/result พร้อม snapshot'); }
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Grading</h2>
      <div className="section">
        <div className="radio">
          <label><input type="radio" checked={mode==='fixed'} onChange={()=>setMode('fixed')} /> Fixed</label>
          <label><input type="radio" checked={mode==='curve'} onChange={()=>setMode('curve')} /> Curve</label>
        </div>
        <div className="row" style={{gap:8,marginTop:8}}>
          <button className="btn-ghost" onClick={simulate}>จำลองผล</button>
          <button className="btn" onClick={confirm}>ยืนยันตัดเกรด</button>
        </div>
      </div>
    </div>
  );
}
