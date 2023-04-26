// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule],
  exports: [ParentComponent, ChildComponent],
})
export class LifeCycleModule {}
