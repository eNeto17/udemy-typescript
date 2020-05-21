import {Model} from "sequelize";

export interface Course extends Model {
    readonly id: number;
    description: string,
    url:  string,
    longDescription: string,
    iconUrl: string,
    courseListIcon: string,
    seqNo: number,
    comingSoon: boolean,
    isNew: boolean,
    isOngoing: boolean
}
