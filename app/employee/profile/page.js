import ProfileForm from '../../components/ProfileForm';
export default function Page(){
  const user = { name:'Somchai Rakdee', email:'somchai@company.com', department:'Engineering', manager:'Anan S.', role:'พนักงาน' };
  return <ProfileForm user={user} />;
}
