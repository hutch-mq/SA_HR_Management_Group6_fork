import RoleLayout from '../components/RoleLayout';

export default function Layout({ children }) {
  const items = [
    { label: 'Results',         href: '/employee/results'},
    { label: 'Personal History',href: '/employee/history-detail'},
    { label: 'Help',            href: '/employee/help'},
  ];
  return <RoleLayout role="พนักงาน" roleKey="employee" items={items}>{children}</RoleLayout>;
}
