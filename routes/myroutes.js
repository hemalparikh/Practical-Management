import express from 'express';
import { createUser, getAllUsers, getAllAdmins, getAllTeachers, getAllStudents } from '../controllers/usercontroller.js';
import { createSubject, getAllSubjects } from '../controllers/subjectcontroller.js';
import { createPractical, getAllPracticals, enrollInPractical } from '../controllers/practicalcontroller.js';
import { isAdmin, isTeacher, isStudent, isAdminOrTeacher } from '../middleware/Middleware.js';

const router = express.Router();

router.post('/users/create', createUser);
router.get('/users/get', isAdmin, getAllUsers);
router.get('/admins/get', isAdmin, getAllAdmins);
router.get('/teachers/get', isAdmin, getAllTeachers);
router.get('/students/get', isAdminOrTeacher, getAllStudents);


router.post('/subject/create', isAdmin, createSubject);
router.get('/subjects/get', getAllSubjects);

router.post('/practicals/create', isTeacher, createPractical);
router.get('/practicals/', getAllPracticals);
router.post('/practicals/enroll', isStudent, enrollInPractical);

export default router;
