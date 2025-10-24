import { getAllUsers } from '@/lib/users';
import { getUserContext } from '@/lib/auth';

import ProfileForm from '../../components/ProfileForm';

export default function Page(){
  const { employeeId } = getUserContext();
  const me = getAllUsers().find(u => u.id === employeeId) || {
    id: employeeId, name:'-', email:'-', department:'-', manager:'-', role:'พนักงาน'
  };
  return <ProfileForm user={{ ...me, role:'พนักงาน' }} />;
}
