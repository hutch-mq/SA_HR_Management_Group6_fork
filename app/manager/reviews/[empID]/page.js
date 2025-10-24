'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function Page() {
  const { empId } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ behavior:3, performance:3, comment:'' });
  const set = (k, v) => setForm(s => ({ ...s, [k]: v }));

  function submit(e){
    e.preventDefault();
    alert('บันทึกการประเมินแล้ว');
    router.push('/manager/reviews');
  }

  return (
    <form className="settings" onSubmit={submit} style={{maxWidth:720}}>
      <div className="section"><h3>ประเมิน: {empId}</h3>
        <p className="muted">ให้คะแนน 1–5 ชัดเจน กดปุ่มสีน้ำเงินคือคะแนนที่เลือก</p></div>

      <Score title="Behavior" value={form.behavior} onChange={v=>set('behavior',v)}
             hints={['สื่อสาร','ร่วมมือ','วินัย']} />

      <Score title="Performance" value={form.performance} onChange={v=>set('performance',v)}
             hints={['คุณภาพ','ปริมาณ','ตรงเวลา']} />

      <div className="section">
        <h3>ข้อคิดเห็น</h3>
        <textarea className="input" rows={4} placeholder="ข้อเสนอแนะสั้นๆ"
                  value={form.comment} onChange={e=>set('comment',e.target.value)} />
      </div>

      <div className="row" style={{justifyContent:'flex-end'}}>
        <button type="button" className="btn-ghost" onClick={()=>router.push('/manager/reviews')}>ยกเลิก</button>
        <button type="submit" className="btn">บันทึก</button>
      </div>
    </form>
  );
}

function Score({ title, value, onChange, hints=[] }){
  return (
    <div className="section">
      <h3>{title}</h3>
      <div className="rate">
        {[1,2,3,4,5].map(v=>(
          <span key={v}>
            <input id={`${title}-${v}`} type="radio" name={title} checked={value===v} onChange={()=>onChange(v)} />
            <label htmlFor={`${title}-${v}`}>{v}</label>
          </span>
        ))}
      </div>
      {hints.length>0 && <p className="help" style={{marginTop:6}}>องค์ประกอบ: {hints.join(' • ')}</p>}
    </div>
  );
}
