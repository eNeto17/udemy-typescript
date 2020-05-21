import {Request, Response} from "express";
import {deleteLesson} from "../queries/deleteLesson";
import * as _ from "lodash";
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";

export function apiDeleteLesson(req: Request, res: Response) {
    const lessonId = req.params.id;

    deleteLesson(lessonId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Could not delete lesson"));
}