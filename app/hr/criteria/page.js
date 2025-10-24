'use client';
import { useState } from 'react';

export default function Page(){
  const [rows,setRows]=useState([{name:'Performance',weight:60},{name:'Behavior',weight:40}]);
  const total = rows.reduce((s,r)=>s+Number(r.weight||0),0);
  function save(){ if(total!==100) return alert('น้ำหนักรวมต้อง = 100%'); alert('บันทึกชุดเกณฑ์และผูกกับรอบ'); }
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Criteria</h2>
      <div className="table-card">
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 120px'}}>
          <strong>หัวข้อ</strong><strong>น้ำหนัก (%)</strong><span/>
        </div>
        {rows.map((r,i)=>(
          <div key={i} className="pill" style={{gridTemplateColumns:'2fr 1fr 120px'}}>
            <input className="input" value={r.name} onChange={e=>setRows(x=>x.map((y,j)=>j===i?{...y,name:e.target.value}:y))}/>
            <input className="input" type="number" value={r.weight} onChange={e=>setRows(x=>x.map((y,j)=>j===i?{...y,weight:e.target.value}:y))}/>
            <button className="btn-ghost" onClick={()=>setRows(x=>x.filter((_,j)=>j!==i))}>ลบ</button>
          </div>
        ))}
        <div className="row" style={{justifyContent:'space-between'}}>
          <span className="muted">รวม: {total}%</span>
          <div>
            <button className="btn-ghost" onClick={()=>setRows(x=>[...x,{name:'',weight:0}])}>เพิ่มหัวข้อ</button>
            <button className="btn" onClick={save}>บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  );
}
