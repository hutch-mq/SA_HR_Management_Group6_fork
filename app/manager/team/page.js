import { getAllUsers } from '../../lib/users';
import { getUserContext } from '../../lib/auth';

export default function Page(){
  const { department } = getUserContext();
  const users = getAllUsers().filter(u => u.department === department);
  return (
    <div>
      <h2 style={{ color:'#0f2f75' }}>Team Overview • {department}</h2>
      {users.map(u=>(
        <div key={u.id} className="pill">
          <div>{u.id} {u.name}</div>
          <div>{u.department}</div>
          <div>-</div>
          <div>in_progress</div>
          <div>{u.manager || '-'}</div>
        </div>
      ))}
    </div>
  );
}
