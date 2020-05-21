import {Component, OnInit} from '@angular/core';
import {CoursesService} from "./services/courses.service";
import {Observable} from "rxjs";
import {Course} from "./model/Course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client for Typescript Rest API';

  course$: Observable<Course>;

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
      console.log("Loading course detail...");
      this.course$ = this.coursesService.loadCourseDetail(1);
  }



}
