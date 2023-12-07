import { Component, Output, EventEmitter  } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-searchtv',
  templateUrl: './searchtv.component.html',
  styleUrls: ['./searchtv.component.css']
})

export class SearchtvComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(2)])

  constructor(){
    this.search.valueChanges.pipe(debounceTime(1000))
    .subscribe(searchValue => {
      if(!this.search.invalid)
        this.searchEvent.emit(searchValue??undefined)})  
      }
  }

