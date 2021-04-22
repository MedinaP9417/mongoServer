import _ from 'lodash';
import Student from '../models/student.model';


const create = (req, res) => {
    const student = Student(req.body);
    student.save((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(201).json(data);
    })
}

const list = (req, res) => {
    Student.find((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(200).json(data);
    });
}

const read = (req, res) => {
    const id = req.params.id;
    Student.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(200).json(data);
    });
}

const update = (req, res) => {
    const id = req.params.id;
    Student.findById(id).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json('Student not found!');
        }
        const student = _.extend(data, req.body);
        student.save((err, data) => {
            if (err) {
                return res.status(400).json(err.message);
            }
            res.status(200).json(data);
        })
    });
}

const remove = (req, res) => {
    const id = req.params.id;
    Student.findById(id).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json('Student not found!');
        }
        data.remove((err, data) => {
            if (err) {
                return res.status(400).json(err.message);
            }
            res.status(200).json('Student deleted.');

        });
    })
}

export default { create, list, read, update, remove }