import bcrypt from 'bcryptjs';
const users=[
    {
        name:'Admin',
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'John',
        email:'john@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:'jane',
        email:'jain@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    }




]
export default users;
