import {LessonModel} from "../model/model";

export function deleteLesson(id: string) {
    return LessonModel.destroy({
        where: {
            id // NOTE: Enhanced object literals feature
        }
    });

}