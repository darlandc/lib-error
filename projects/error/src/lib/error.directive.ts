import { Directive, OnInit, ViewContainerRef, TemplateRef } from "@angular/core";
import { ErrorService } from './error.service';

@Directive({
  selector: '[error]'
})
export class ErrorDirective implements OnInit {

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<object>,
    private service: ErrorService
  ){}

  ngOnInit(): void {

    const code = this.service.code;

    if (code === 401){
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }

  }


}
