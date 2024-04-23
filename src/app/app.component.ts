import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    courses = COURSES;
    
    @ViewChild('cardRef1', {read: ElementRef})
    card1: CourseCardComponent

    @ViewChild('container')
    containerDiv: ElementRef;

    onCourseSelected(course:Course) {
        console.log(this.containerDiv);
    }

}
