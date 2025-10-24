export default function Page(){
  // เดโมข้อมูลผลประเมินของ “ฉัน”
  const results = [
    { round:'Mid-year 2025', status:'กำลังรอหัวหน้าอนุมัติ', total:'-',  file:null,      updated:'10/11/2025' },
    { round:'Year-end 2024', status:'เสร็จสิ้น',              total:'4.1', file:'/files/yr-2024.pdf', updated:'05/01/2025' },
    { round:'Mid-year 2024', status:'เสร็จสิ้น',              total:'3.8', file:'/files/mid-2024.pdf',updated:'01/07/2024' },
  ];

  return (
    <div>
      <h2 style={{ color:'#0f2f75' }}>Results</h2>

      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 180px',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>รอบประเมิน</strong><strong>สถานะ</strong><strong>คะแนนรวม</strong><span/>
        </div>

        {results.map((r,i)=>(
          <div key={i} className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 180px'}}>
            <div>{r.round}</div>
            <div>{r.status}</div>
            <div>{r.total}</div>
            <div style={{display:'flex',gap:8}}>
              {r.file
                ? <a className="btn" href={r.file}>ดาวน์โหลด</a>
                : <button className="btn" disabled>รอดาวน์โหลด</button>}
              <a className="btn-ghost" href={`mailto:hr@company.com?subject=สอบถามผลประเมิน ${encodeURIComponent(r.round)}`}>
                สอบถาม
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
