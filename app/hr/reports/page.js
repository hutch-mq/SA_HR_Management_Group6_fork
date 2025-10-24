'use client';
export default function Page(){
  function build(){ alert('เรนเดอร์ข้อมูลเป็นไฟล์รายงาน'); }
  function send(){ alert('ส่งลิงก์รายงาน + บันทึกสถานะ'); }
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Reports & Analytics</h2>
      <div className="row" style={{gap:8}}>
        <button className="btn" onClick={build}>สร้างรายงาน</button>
        <button className="btn-ghost" onClick={send}>ส่งรายงาน</button>
      </div>
      <div className="table-card" style={{marginTop:12}}>
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 140px'}}>
          <strong>รายงาน</strong><strong>สถานะ</strong><strong>อัปเดต</strong><span/>
        </div>
        <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 140px'}}>
          <div>สรุป Mid-year 2025</div><div>พร้อมส่ง</div><div>20/11/2025</div>
          <div><a className="btn" href="#">ดาวน์โหลด</a></div>
        </div>
      </div>
    </div>
  );
}
