import express from 'express'
import { createUser, getAdminUsers, getUserById, getUsers } from './user.controller';
const router = express.Router();


router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id', getUserById);
router.post('/admins', getAdminUsers);

export default router;