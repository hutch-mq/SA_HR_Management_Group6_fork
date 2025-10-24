import RoleLayout from '../components/RoleLayout';

export default function Layout({ children }) {
  const items = [
    { label:'Dashboard', href:'/hr/dashboard',  icon:'▣' },
    { label:'Rounds',    href:'/hr/rounds',     icon:'▦' },
    { label:'Criteria',  href:'/hr/criteria',   icon:'▦' },
    { label:'Employees', href:'/hr/employees',  icon:'▦' },
    { label:'Dispatch',  href:'/hr/dispatch',   icon:'▦' },
    { label:'Processing',href:'/hr/processing', icon:'▦' },
    { label:'Grading',   href:'/hr/grading',    icon:'▦' },
    { label:'Reports',   href:'/hr/reports',    icon:'▦' },
    { label:'Termination',href:'/hr/termination',icon:'▦' },
  ];
  return <RoleLayout role="HR" roleKey="hr" items={items}>{children}</RoleLayout>;
}
