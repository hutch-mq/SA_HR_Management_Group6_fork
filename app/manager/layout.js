import RoleLayout from '../components/RoleLayout';

export default function Layout({ children }) {
  const items = [
    { label: 'Dashboard',       href: '/manager/dashboard'},
    { label: 'Team Overview',   href: '/manager/team'},
    { label: 'Pending Reviews', href: '/manager/reviews'},
    { label: 'Reports',         href: '/manager/reports'},
  ];
  return <RoleLayout role="หัวหน้า" roleKey="manager" items={items}>{children}</RoleLayout>;
}
