// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, FormsModule],
  exports: [ParentComponent, ChildComponent],
})
export class LifeCycleModule {}
