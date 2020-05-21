import * as _ from "Lodash";
import {Request, Response} from "express-serve-static-core";
import {createLesson} from "../queries/createLesson";
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";
import {databaseErrorHandler} from "./databaseErrorHandler";


export function apiPostCreateLesson(req: Request, res: Response) {

    createLesson(req.body)
        // Last parameter "data" for "onSuccess" will be added with "then" parameter triggered
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        // This second 'catch' will work if there is an exception on first 'catch'
        .catch(_.partial(onError, res, "Could not create a lesson"));
}