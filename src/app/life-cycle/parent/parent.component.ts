import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public messageToChild: string = 'Message from Parent to Child';
  public messageFromChild!: string;

  constructor() {
    // console.warn('Parent constructor');
  }

  ngOnChanges() {
    // console.warn('Parent onChanges');
  }

  ngOnInit() {
    // console.warn('Parent onInit');
  }

  ngDoCheck() {
    // console.warn('Parent doCheck');
  }

  ngAfterContentInit() {
    // console.warn('Parent afterContentInit');
  }

  ngAfterContentChecked() {
    // console.warn('Parent afterContentChecked');
  }

  ngAfterViewInit() {
    // console.warn('Parent afterViewInit');
  }

  ngAfterViewChecked() {
    // console.warn('Parent afterViewChecked');
  }

  ngOnDestroy() {
    // console.warn('Parent onDestroy');
  }

  public showMessage(messageFromChild: string) {
    this.messageFromChild = messageFromChild;
  }
}
