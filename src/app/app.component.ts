import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [...COURSES];

  startDate = new Date().getDate();

  title = COURSES[0].description;

  price = 9.99;

  course = COURSES[0];

  onCourseSelected(course:Course){
    alert("Card clicked.." + course);
    console.log("App component - click event bubbled...", course)
  }

  trackCourse(index:number, course:Course){
    return course.id;
  }
}
