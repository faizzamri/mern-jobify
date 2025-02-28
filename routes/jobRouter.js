import { Router } from 'express';
const router = Router();

import { getAllJobs, createJob, getJob, updateJob, deleteJob } from '../controllers/jobController.js';
import { validateJobInput, validateIdParam } from '../middleware/validationMiddleware.js';
// router.get('/api/v1/jobs', getAllJobs);
// router.post('/api/v1/jobs', createJob);
// router.get('/api/v1/jobs/:id', getJob);
// router.patch('/api/v1/jobs/:id', updateJob);
// router.delete('/api/v1/jobs/:id', deleteJob);
router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/:id').get(validateIdParam, getJob).patch(validateJobInput, validateIdParam, updateJob).delete(validateIdParam, deleteJob);

export default router;