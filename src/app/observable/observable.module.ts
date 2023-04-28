// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ObservableOneComponent } from './observable-one/observable-one.component';
import { ObservableTwoComponent } from './observable-two/observable-two.component';

@NgModule({
  declarations: [ObservableOneComponent, ObservableTwoComponent],
  imports: [CommonModule],
  exports: [ObservableOneComponent, ObservableTwoComponent],
})
export class ObservableModule {}
