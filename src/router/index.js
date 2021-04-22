import student from './student.router';
import course from './course.router';

export default app => {
    app.use('/', student);
    app.use('/', course);
}