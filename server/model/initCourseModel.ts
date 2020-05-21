import {Model, Sequelize, BuildOptions, DataTypes} from "Sequelize";
import {Course} from "../../shared/module/Course";

export type CourseModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Course;
}

export function initCourseModel(sequelize: Sequelize): CourseModelStatic {
    return <CourseModelStatic> sequelize.define('Course', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        description: { type: DataTypes.STRING },
        url:  { type: DataTypes.STRING },
        longDescription: { type: DataTypes.TEXT },
        iconUrl: { type: DataTypes.STRING },
        courseListIcon: { type: DataTypes.STRING },
        seqNo: { type: DataTypes.INTEGER },
        comingSoon: { type: DataTypes.BOOLEAN },
        isNew: { type: DataTypes.BOOLEAN },
        isOngoing: { type: DataTypes.BOOLEAN }
    })
}
