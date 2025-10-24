'use client';
import { useState } from 'react';

export default function ProfileForm({ user }) {
  // user = { id,name,email,department,manager,role,phone }
  const [show, setShow] = useState(false);
  const [oldPw, setOld] = useState('');
  const [newPw, setNew] = useState('');
  const [cfPw,  setCf]  = useState('');

  function changePw(e){
    e.preventDefault();
    if (!oldPw || !newPw) return alert('กรอกข้อมูลให้ครบ');
    if (newPw.length < 8)  return alert('รหัสผ่านใหม่อย่างน้อย 8 ตัว');
    if (newPw !== cfPw)    return alert('รหัสผ่านใหม่ไม่ตรงกัน');
    alert('บันทึกรหัสผ่านแล้ว');
  }

  return (
    <div className="settings" style={{maxWidth:720}}>
      {/* 1) สรุปผู้ใช้ */}
      <div className="section">
        <h3>โปรไฟล์</h3>
        <div className="row">
          <div className="avatar" style={{width:64,height:64,borderRadius:16}} />
          <div>
            <div className="brand-text" style={{marginBottom:2}}>{user.name}</div>
            <div className="muted">{user.email}</div>
          </div>
        </div>
      </div>

      {/* 2) ข้อมูลงาน */}
      <div className="section">
        <h3>ข้อมูลงาน</h3>
        <div className="row" style={{gap:16}}>
          <Info k="รหัสพนักงาน" v={user.id || '-'} />
          <Info k="แผนก" v={user.department || '-'} />
          <Info k="หัวหน้า" v={user.manager || '-'} />
          <Info k="บทบาท" v={user.role || '-'} />
        </div>
      </div>

      {/* 3) ช่องทางติดต่อ */}
      <div className="section">
        <h3>ติดต่อ</h3>
        <div className="row" style={{gap:16}}>
          <Info k="อีเมล" v={user.email || '-'} />
          <Info k="โทร" v={user.phone || '-'} />
        </div>
      </div>

      {/* 4) เปลี่ยนรหัสผ่าน */}
      <form className="section" onSubmit={changePw}>
        <h3>เปลี่ยนรหัสผ่าน</h3>
        <div className="row">
          <input className="input" style={{flex:1}} type={show?'text':'password'}
                 placeholder="รหัสผ่านเดิม" value={oldPw} onChange={e=>setOld(e.target.value)} />
          <input className="input" style={{flex:1}} type={show?'text':'password'}
                 placeholder="รหัสผ่านใหม่ (≥ 8)" value={newPw} onChange={e=>setNew(e.target.value)} />
          <div className="input-wrap" style={{flex:1}}>
            <input className="input" type={show?'text':'password'}
                   placeholder="ยืนยันรหัสผ่านใหม่" value={cfPw} onChange={e=>setCf(e.target.value)} />
            <span className="eye" onClick={()=>setShow(s=>!s)}>{show?'🙈':'👁️'}</span>
          </div>
        </div>
        <div className="row" style={{justifyContent:'flex-end',marginTop:8}}>
          <button className="btn" type="submit">บันทึกรหัสผ่าน</button>
        </div>
      </form>
    </div>
  );
}

function Info({k,v}) {
  return (
    <div style={{flex:1,minWidth:140}}>
      <div className="muted">{k}</div>
      <div>{v}</div>
    </div>
  );
}
