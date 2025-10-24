'use client';
export default function Page(){
  function calc(){ alert('คำนวณ weighted total + resultCandidate'); }
  function validate(){ alert('ตรวจความครบถ้วน + ไฮไลต์ที่ขาด'); }
  function summarize(){ alert('สรุปผล เกรด ข้อความสรุป และรีเฟรช UI'); }
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Processing</h2>
      <div className="row" style={{gap:12}}>
        <button className="btn" onClick={calc}>คำนวณคะแนนรวม</button>
        <button className="btn-ghost" onClick={validate}>ตรวจความครบ</button>
        <button className="btn" onClick={summarize}>สรุปผล</button>
      </div>
      <div className="table-card" style={{marginTop:12}}>
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
          <strong>พนักงาน</strong><strong>Subtotal</strong><strong>Total</strong><strong>Result</strong>
        </div>
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
          <div>EMP-203 Mali P.</div><div>Perf 3.9 • Beh 4.2</div><div>4.05</div><div>pass</div>
        </div>
      </div>
    </div>
  );
}
