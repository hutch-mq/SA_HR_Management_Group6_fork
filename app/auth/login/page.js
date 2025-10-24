'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page(){
  const r = useRouter();
  const [role,setRole] = useState('hr');
  const [show,setShow] = useState(false);
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [err,setErr] = useState('');

  function submit(e){
    e.preventDefault();
    if(!email || !pass){ setErr('กรอกอีเมลและรหัสผ่าน'); return; }
    document.cookie = `role=${role}; path=/; max-age=86400`;
    r.push('/dashboard');
  }

  return (
    <div className="auth-wrap">
      <form onSubmit={submit} className="auth-card" aria-label="Login form">
        <h2 className="auth-title">เข้าสู่ระบบ</h2>
        <p className="auth-sub">ใส่ข้อมูลเพื่อเข้าใช้งานระบบประเมิน</p>

        <div className="field">
          <label>อีเมล</label>
          <input className="input" type="email" placeholder="you@company.com"
                 value={email} onChange={e=>setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label>รหัสผ่าน</label>
          <div className="input-wrap">
            <input className="input" type={show?'text':'password'} placeholder="••••••••"
                   value={pass} onChange={e=>setPass(e.target.value)} />
            <span className="eye" onClick={()=>setShow(s=>!s)} aria-label="toggle password">
              {show ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

        <div className="field">
          <label>บทบาท</label>
          <select className="input" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="hr">HR</option>
            <option value="manager">หัวหน้า</option>
            <option value="employee">พนักงาน</option>
          </select>
          <div className="help">หน้าทดสอบ: เลือกบทบาทเพื่อพาไปแดชบอร์ดที่เกี่ยวข้อง</div>
        </div>

        <div className="actions">
          <label style={{display:'flex',gap:8,alignItems:'center'}}>
            <input type="checkbox" /> จำการเข้าสู่ระบบ
          </label>
          <a className="link" href="#">ลืมรหัสผ่าน</a>
        </div>

        {err && <div style={{color:'#b91c1c',fontSize:12,marginTop:8}}>{err}</div>}

        <button className="btn btn-xl" type="submit">เข้าสู่ระบบ</button>

        <div className="separator">หรือ</div>

        <div className="row">
          <a className="btn" style={{flex:1,textAlign:'center',background:'#eef4ff',color:'#0b63ff'}} href="/auth/register">
            สมัครใช้งาน
          </a>
        </div>
      </form>
    </div>
  );
}
