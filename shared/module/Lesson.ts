import {Model} from "sequelize";

export interface Lesson extends Model {
    readonly id: number;
    url:  string,
    description: string,
    duration: string,
    seqNo: number,
    courseId: number,
    pro: boolean,
    tags: string,
    gitHubUrl: string
}