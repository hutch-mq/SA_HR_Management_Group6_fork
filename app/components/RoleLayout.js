import Sidebar from './Sidebar';

export default function RoleLayout({ role, roleKey, items, children }) {
  return (
    <div className="layout">
      <Sidebar role={role} roleKey={roleKey} items={items} />
      <main className="content">{children}</main>
    </div>
  );
}
