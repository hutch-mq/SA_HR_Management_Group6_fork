export default function Page(){
  const reports = [
    { name:'สรุปผล Mid-year 2025', file:'mid-year-2025.pdf', owner:'HR', date:'20/11/2025' },
    { name:'รายงานความคืบหน้า',   file:'progress-week45.pdf', owner:'HR', date:'10/11/2025' },
  ];
  return (
    <div>
      <h2 style={{color:'#0f2f75'}}>Reports</h2>
      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 120px',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>ชื่อรายงาน</strong><strong>เจ้าของ</strong><strong>วันที่</strong><span/>
        </div>
        {reports.map((r,i)=>(
          <div key={i} className="pill" style={{gridTemplateColumns:'2fr 1fr 1fr 120px'}}>
            <div>{r.name}</div><div>{r.owner}</div><div>{r.date}</div>
            <div><a className="btn" href="#">{'ดาวน์โหลด'}</a></div>
          </div>
        ))}
      </div>
    </div>
  );
}
