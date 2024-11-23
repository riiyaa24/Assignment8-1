import { Component } from '@angular/core';
import { EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements  OnInit
{
  //create object of event class
  @Output() public dataEvent = new EventEmitter();

  inputText = '';

  //Action listener for button
  public SendEvent()
  {
    //Send the event to parent
    this.dataEvent.emit(this.inputText);
  }

  ngOnInit(): void {
      
  }

}
