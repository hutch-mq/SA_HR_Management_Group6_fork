export default function Page(){
  return (
    <div className="settings" style={{maxWidth:720}}>
      <div className="section">
        <h3>คู่มือการประเมิน (สำหรับพนักงาน)</h3>
        <ol style={{margin:'8px 0 0 18px'}}>
          <li>เปิดแท็บ <strong>Results</strong> เพื่อตรวจสถานะล่าสุด</li>
          <li>เมื่อผลออก สามารถกด <strong>ดาวน์โหลด</strong> เพื่อรับไฟล์สรุป</li>
          <li>หากมีคำถาม กด <strong>สอบถาม</strong> เพื่ออีเมลหา HR</li>
        </ol>
      </div>
      <div className="section">
        <h3>เกณฑ์คะแนนโดยย่อ</h3>
        <p className="muted">1 = ต้องปรับปรุงมาก • 3 = ตามเป้า • 5 = ยอดเยี่ยม</p>
      </div>
      <div className="section">
        <h3>ติดต่อ HR</h3>
        <p>hr@company.com • 02-000-0000</p>
      </div>
    </div>
  );
}
