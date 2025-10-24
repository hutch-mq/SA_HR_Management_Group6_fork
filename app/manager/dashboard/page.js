import KpiCards from '../../components/KpiCards';

export default function Page(){
  const cards = [
    { k:'ทีมทั้งหมด', v: 18 },
    { k:'คงค้างรีวิว', v: 5 },
    { k:'ครบกำหนดสัปดาห์นี้', v: 3 },
    { k:'รีวิวเสร็จเดือนนี้', v: 12 },
  ];
  const rows = [
    ['EMP-2101 Pim S.', 'Mid-year 2025', '12/11/2025', 'pending', 'หัวหน้า'],
    ['EMP-2107 Oak T.', 'Mid-year 2025', '14/11/2025', 'pending', 'หัวหน้า'],
    ['EMP-2109 Fon K.', 'Mid-year 2025', '15/11/2025', 'in_progress', 'หัวหน้า'],
  ];
  return (
    <div>
      <KpiCards cards={cards}/>
      <div className="table-card">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr',gap:12,marginBottom:8,color:'#64748B'}}>
          <strong>พนักงาน</strong><strong>รอบ</strong><strong>กำหนด</strong><strong>สถานะ</strong><strong>ผู้รับผิดชอบ</strong>
        </div>
        {rows.map((r,i)=>(
          <div className="pill" key={i}>
            <div>{r[0]}</div><div>{r[1]}</div><div>{r[2]}</div><div>{r[3]}</div><div>{r[4]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
