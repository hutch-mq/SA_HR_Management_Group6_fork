import ProfileForm from '../../components/ProfileForm';
export default function Page(){
  const user = {
    id:'EMP210', name:'Somchai Rakdee', email:'somchai@company.com',
    department:'Sales', manager:'VP Sales', role:'หัวหน้า', phone:'02-000-0000'
  };
  return <ProfileForm user={user} />;
}
