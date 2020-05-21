import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Course} from "../model/Course";

@Injectable()
export class CoursesService {

  constructor(private http:Http) {


  }

  loadCourseDetail(courseId: number) : Observable <Course> {
    return this.http.get(`/api/courses/${courseId}`)
      .map(res => res.json().payload);
  }
}
