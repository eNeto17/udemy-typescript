import {Model, Sequelize, BuildOptions, DataTypes} from "Sequelize";
import {Lesson} from "../../shared/module/Lesson";

export type LessonModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Lesson;
}

export function initLessonModel(sequelize: Sequelize): LessonModelStatic {
    return <LessonModelStatic> sequelize.define('Lesson', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        url: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        duration: { type: DataTypes.STRING },
        seqNo: { type: DataTypes.INTEGER },
        courseId: { type: DataTypes.INTEGER },
        pro: { type: DataTypes.BOOLEAN },
        tags: { type: DataTypes.STRING },
        gitHubUrl: { type: DataTypes.STRING }
    })
}
