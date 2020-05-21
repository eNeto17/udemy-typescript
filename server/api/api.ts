import {Application} from "Express";
import {apiGetAllCourses} from "./apiGetAllCourses";
import {apiGetCourse} from "./apiGetCourse";
import {apiPostCreateLesson} from "./apiPostCreateLesson";
import {apiPatchLesson} from "./apiPatchLesson";
import {apiDeleteLesson} from "./apiDeleteLesson";

export function initRestApi(app:Application) {
    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourse);
    app.route('/api/lesson').post(apiPostCreateLesson);
    app.route('/api/lesson/:id').patch(apiPatchLesson);
    app.route('/api/lesson/:id').delete(apiDeleteLesson);
}
