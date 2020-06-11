import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { ErrorDirective } from './error.directive';



@NgModule({
  declarations: [ErrorComponent, ErrorDirective],
  imports: [

  ],
  exports: [ErrorComponent]
})
export class ErrorModule { }
