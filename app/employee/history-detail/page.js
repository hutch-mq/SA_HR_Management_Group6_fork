export default function Page(){
  const employment = [
    { key:'รหัสพนักงาน', val:'EMP765' },
    { key:'ชื่อ–สกุล',   val:'Anan Dev' },
    { key:'แผนก',        val:'Engineering' },
    { key:'หัวหน้า',      val:'Somchai EngMgr' },
    { key:'เริ่มงาน',     val:'01/06/2023' },
    { key:'ประเภทจ้าง',   val:'พนักงานประจำ' },
  ];

  const career = [
    { date:'03/2025', event:'เปลี่ยนตำแหน่ง', note:'Software Engineer → Senior Software Engineer' },
    { date:'08/2024', event:'อบรม',        note:'React Advanced Workshop (12 ชม.)' },
    { date:'12/2024', event:'รางวัล',      note:'Kudos Q4/2024 ด้านความร่วมมือ' },
  ];

  const evals = [
    { round:'Year-end 2024', overall:'4.1', strengths:'Delivery, Ownership', dev:'Tech leadership' },
    { round:'Mid-year 2024', overall:'3.8', strengths:'Quality',            dev:'Communication' },
  ];

  return (
    <div className="settings" style={{maxWidth:900}}>
      <div className="section">
        <h3>ข้อมูลพนักงาน</h3>
        <div className="settings-grid">
          {employment.map((x,i)=>(
            <div key={i}>
              <div className="muted">{x.key}</div>
              <div>{x.val}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>ประวัติการทำงาน</h3>
        <div className="table-card" style={{border:'none',padding:0}}>
          {career.map((c,i)=>(
            <div key={i} className="pill" style={{gridTemplateColumns:'120px 1fr 2fr'}}>
              <div>{c.date}</div><div>{c.event}</div><div>{c.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>สรุปผลประเมินย้อนหลัง</h3>
        <div className="table-card" style={{border:'none',padding:0}}>
          <div className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr',background:'transparent'}}>
            <strong>รอบ</strong><strong>คะแนนรวม</strong><strong>จุดแข็ง</strong><strong>พัฒนา</strong>
          </div>
          {evals.map((e,i)=>(
            <div key={i} className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
              <div>{e.round}</div><div>{e.overall}</div><div>{e.strengths}</div><div>{e.dev}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
