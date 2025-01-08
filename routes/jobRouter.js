import { Router } from 'express';
const router = Router();

import { getAllJobs, createJob, getJob, updateJob, deleteJob } from '../controllers/jobController.js';

// router.get('/api/v1/jobs', getAllJobs);
// router.post('/api/v1/jobs', createJob);
// router.get('/api/v1/jobs/:id', getJob);
// router.patch('/api/v1/jobs/:id', updateJob);
// router.delete('/api/v1/jobs/:id', deleteJob);
router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;