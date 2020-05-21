import * as _ from "Lodash";
import {Request, Response} from "express-serve-static-core";
import {findAllCourses} from "../queries/findAllCourses";
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiGetAllCourses(req: Request, res: Response) {

    findAllCourses()
        // Last parameter "data" for "onSuccess" will be added with "then" parameter triggered
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find all courses failed"));
}