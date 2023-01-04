import  express from "express";
const router = express.Router();

import {getAllUsers, createUser, getUser, deleteUser, updateUser} from './controllers/users.js';


 // Getting all Users - GET /users
router.get('/users', getAllUsers);

 // Adding New User - POST /users
 router.post('/users', createUser);

 // Getting a specific User - GET /users/:id
 router.get('/users/:id', getUser);

  // Delete a specific User - Delete /users/:id
 router.delete('/users/:id', deleteUser);

  // Update a specific User - Patch /users/:id
 router.patch('/users/:id',updateUser);

export default router;