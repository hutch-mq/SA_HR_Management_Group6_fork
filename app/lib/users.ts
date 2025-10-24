export const ALL_USERS = [
  { id:'EMP001', name:'Somchai Rakdee', email:'somchai@company.com', department:'HR',          manager:'-' },
  { id:'EMP210', name:'Pim SalesLead',  email:'pim@company.com',      department:'Sales',      manager:'VP Sales' },
  { id:'EMP765', name:'Anan Dev',       email:'anan@company.com',     department:'Engineering',manager:'Somchai EngMgr' },
];
export function getAllUsers(){ return ALL_USERS; }
