import {CourseModel} from "../model/model";
import {Course} from "../../shared/module/Course";

export function findCourse(courseId: number) : Promise<Course> {

    return CourseModel.findByPk(courseId, {
        include: [
            CourseModel.associations.lessons
        ]
    });

}