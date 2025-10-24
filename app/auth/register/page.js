'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page(){
  const r = useRouter();
  const [show,setShow] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [err,setErr] = useState('');

  function submit(e){
    e.preventDefault();
    if(!name || !email || !pass){ setErr('กรอกข้อมูลให้ครบ'); return; }
    // demo: ตั้งค่า role เริ่มต้นเป็น employee
    document.cookie = 'role=employee; path=/; max-age=86400';
    r.push('/dashboard');
  }

  return (
    <div className="auth-wrap">
      <form onSubmit={submit} className="auth-card" aria-label="Register form">
        <h2 className="auth-title">สมัครใช้งาน</h2>
        <p className="auth-sub">สร้างบัญชีใหม่เพื่อเริ่มใช้งาน</p>

        <div className="field">
          <label>ชื่อ–สกุล</label>
          <input className="input" placeholder="Somchai Rakdee"
                 value={name} onChange={e=>setName(e.target.value)} />
        </div>

        <div className="field">
          <label>อีเมล</label>
          <input className="input" type="email" placeholder="you@company.com"
                 value={email} onChange={e=>setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label>รหัสผ่าน</label>
          <div className="input-wrap">
            <input className="input" type={show?'text':'password'} placeholder="อย่างน้อย 8 ตัวอักษร"
                   value={pass} onChange={e=>setPass(e.target.value)} />
            <span className="eye" onClick={()=>setShow(s=>!s)} aria-label="toggle password">
              {show ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="help">เคล็ดลับ: ใช้ตัวอักษร+ตัวเลขผสมกัน</div>
        </div>

        {err && <div style={{color:'#b91c1c',fontSize:12,marginTop:8}}>{err}</div>}

        <button className="btn btn-xl" type="submit">สมัครใช้งาน</button>

        <div className="separator">มีบัญชีแล้ว?</div>

        <div className="row">
          <a className="btn" style={{flex:1,textAlign:'center',background:'#eef4ff',color:'#0b63ff'}} href="/auth/login">
            เข้าสู่ระบบ
          </a>
        </div>
      </form>
    </div>
  );
}
