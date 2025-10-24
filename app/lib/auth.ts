import { cookies } from 'next/headers';

export function getRole(){
  return cookies().get('role')?.value || 'employee'; // 'hr' | 'manager' | 'employee'
}
export function getUserContext(){
  const c = cookies();
  return {
    role: getRole(),
    employeeId: c.get('empId')?.value || 'EMP765',
    department: c.get('dept')?.value || 'Engineering',
  };
}
