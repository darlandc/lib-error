import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  code: number;

  constructor() { }

  updateError(code){
    this.code = code;
  }
}
