import 'express-async-errors'
import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'
// import { NotFoundError } from '../errors/customErrors.js'

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({})
    res.status(StatusCodes.OK).json({ jobs })
}

export const createJob = async (req, res) => {
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

export const getJob = async (req, res) => {
    // const { id } = req.params;
    const job = await Job.findById(req.params.id)
    // if (!job) throw new NotFoundError(`no job with id ${id}`)
    // if (!job) {
    //     return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id}` })
    // }
    res.status(StatusCodes.OK).json({ job })
}

export const updateJob = async (req, res) => {
    // const { id } = req.params
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
    // if (!job) throw new NotFoundError(`no job with id ${id}`)
    // if (!job) {
    //     return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id}` })
    // }
    res.status(StatusCodes.OK).json({ msg: `Job id: ${id} has been updated`, job })
}

export const deleteJob = async (req, res) => {
    // const { id } = req.params
    const job = await Job.findByIdAndDelete(req.params.id)
    // if (!job) throw new NotFoundError(`no job with id ${id}`)
    // if (!job) {
    //     return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id}` })
    // }
    res.status(StatusCodes.OK).json({ msg: `Job id: ${id} has been deleted`, job: job })
}