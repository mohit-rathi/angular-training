import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
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
  @Input() messageFromParent!: string;
  @Output() messageEvent = new EventEmitter<string>();
  @ViewChild('checkBox') checkBoxView!: ElementRef;
  @ContentChild('childContent') childContent!: ElementRef;

  public isDisplay: boolean = false;

  constructor() {
    console.warn('Child constructor');
  }

  ngOnChanges() {
    console.warn('Child onChanges');
  }

  ngOnInit() {
    console.warn('Child onInit');
  }

  ngDoCheck() {
    console.warn('Child doCheck');
  }

  ngAfterContentInit() {
    console.warn('Child afterContentInit');
  }

  ngAfterContentChecked() {
    console.warn('Child afterContentChecked');
  }

  ngAfterViewInit() {
    console.warn('Child afterViewInit');
  }

  ngAfterViewChecked() {
    console.warn('Child afterViewChecked');
    console.error(this.childContent.nativeElement);
  }

  ngOnDestroy() {
    console.warn('Child onDestroy');
  }

  public sendMessageToParent(): void {
    this.messageEvent.emit('Message from Child to Parent');
  }

  public toggle(): void {
    this.isDisplay = this.checkBoxView.nativeElement.checked;
  }
}
