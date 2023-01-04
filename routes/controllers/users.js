import { v4 as uuidv4 } from 'uuid';
let users = [
    {
        fName: "John",
        lName: "Doe",
        age: 25,
        id: '937e7091-bd08-4952-b755-631c32c61194'
    },
    {
        fName: "Dave",
        lName: "Simpson",
        age: 30,
        id: '6e2f468a-4c1c-431b-af1c-ab5d40d93684'
    },
    {
        fName: "Jon",
        lName: "Mayers",
        age: 50,
        id: '7f3g579b5-5d2d-542c-bg2d-bc6e5e82573'
    },
]
export const getAllUsers = (req, res) => {
    res.send(users);
    console.log(users)
 }

 export const createUser = (req, res) => { 
    console.log('post route reached');
    const user = req.body;  
    users.push({...user, id:uuidv4()});
    res.send(users);
 }

 export const getUser = (req, res) => { 
    console.log('get ID route reached');
    const {id} = req.params;
    const foundUser = users.find(user => user.id ===id);
    res.send(foundUser);
 }

 export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter(user => user.id != id);
    res.send(users);
 }

export const updateUser =  (req, res) => { 
    const {id} = req.params;
    const updateUser = users.find(user => user.id == id);
    updateUser.age = req.body.age;
 }
