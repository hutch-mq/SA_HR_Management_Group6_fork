'use client';
export default function Page(){
  function submit(e){ e.preventDefault(); alert('ปิดสถานะพนักงาน + แจ้งผู้เกี่ยวข้อง'); }
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Termination</h2>
      <form className="section" onSubmit={submit}>
        <div className="settings-grid">
          <input className="input" placeholder="Employee ID"/>
          <input className="input" placeholder="เหตุผล"/>
          <input className="input" type="date" />
        </div>
        <button className="btn" style={{marginTop:8}}>ยกเลิกสัญญา</button>
      </form>
      <p className="help">อนุมัติตามนโยบายก่อนดำเนินการจริง</p>
    </div>
  );
}
