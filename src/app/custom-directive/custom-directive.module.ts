// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// directives
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { AdvanceHighlightDirective } from './directives/advance-highlight.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { CustomHighlightDirective } from './directives/custom-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

// components
import { DirectiveOneComponent } from './directive-one/directive-one.component';

@NgModule({
  declarations: [
    DirectiveOneComponent,
    BasicHighlightDirective,
    AdvanceHighlightDirective,
    HoverHighlightDirective,
    CustomHighlightDirective,
    UnlessDirective,
  ],
  imports: [CommonModule],
  exports: [
    DirectiveOneComponent,
    BasicHighlightDirective,
    AdvanceHighlightDirective,
    HoverHighlightDirective,
    CustomHighlightDirective,
    UnlessDirective,
  ],
})
export class CustomDirectiveModule {}
