import {LessonModel} from "../model/model";

export function updateLesson(id: string, props: any) {
    return LessonModel.update(
        props, {
            where: {id: id} // NOTE: can user enhanced object literals just using "id"
        }
    );
}