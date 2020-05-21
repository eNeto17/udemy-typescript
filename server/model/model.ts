import {Sequelize} from 'Sequelize';
import {initCourseModel, CourseModelStatic} from "./initCourseModel";
import {initLessonModel, LessonModelStatic} from "./initLessonModel";

const dbUrl = "postgres://postgres:postgres@localhost:5432/complete-typescript-course";

const sequelize:Sequelize = new Sequelize(dbUrl);
export const CourseModel:CourseModelStatic = initCourseModel(sequelize);
export const LessonModel:LessonModelStatic = initLessonModel(sequelize);

// Define relationship
CourseModel.hasMany(LessonModel, {
    sourceKey: 'id',
    foreignKey: 'courseId',
    as: 'lessons'});

LessonModel.belongsTo(CourseModel, {
    foreignKey: 'courseId',
    as: 'course'});