import * as _ from "Lodash";
import {Request, Response} from "express-serve-static-core";
import {findCourse} from "../queries/findCourse";
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetCourse(req: Request, res: Response) {

    const courseId:number = parseInt(req.params.id);

    findCourse(courseId)
        // Last parameter "data" for "onSuccess" will be added with "then" parameter triggered
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find course failed"));
}