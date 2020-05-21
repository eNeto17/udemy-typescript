import {CourseModel} from "../model/model";
import {Course} from "../../shared/module/Course";

export function findAllCourses() : Promise<Course[]> {

    // Following commented line just to simulate an application error
    // throw new Error("Error triggered");

    return CourseModel.findAll({
        order: ['seqNo'],
        raw : true
    });

}