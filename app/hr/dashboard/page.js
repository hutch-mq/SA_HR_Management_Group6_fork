import KpiCards from '../../components/KpiCards';

export default function Page(){
  const cards = [
    { k:'รอบที่เปิด', v:2 }, { k:'คงค้างรีวิว', v:34 },
    { k:'พนักงานทั้งหมด', v:128 }, { k:'รายงานใหม่', v:5 },
  ];
  const rows = [
    ['EMP-112 Somchai R.', 'Mid-year 2025', '12/11/2025', 'pending', 'หัวหน้า'],
    ['EMP-203 Mali P.',    'Mid-year 2025', '14/11/2025', 'in_progress', 'หัวหน้า'],
  ];
  return (
    <div>
      <KpiCards cards={cards} />
      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>พนักงาน</strong><strong>รอบ</strong><strong>กำหนด</strong><strong>สถานะ</strong><strong>ผู้รับผิดชอบ</strong>
        </div>
        {rows.map((r,i)=>(
          <div key={i} className="pill">
            <div>{r[0]}</div><div>{r[1]}</div><div>{r[2]}</div><div>{r[3]}</div><div>{r[4]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
