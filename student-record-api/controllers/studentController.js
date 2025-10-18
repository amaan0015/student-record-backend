const Student = require('../models/Student');

// GET all students
exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) { next(err); }
};

// POST create new student
exports.createStudent = async (req, res, next) => {
  try {
    const { name, course, age, city } = req.body;
    if (!name || !course) return res.status(400).json({ message: 'Name and Course are required' });

    const student = new Student({ name, course, age, city });
    await student.save();
    res.status(201).json(student);
  } catch (err) { next(err); }
};

// PUT update student
exports.updateStudent = async (req, res, next) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

// DELETE student
exports.deleteStudent = async (req, res, next) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) { next(err); }
};
