// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookListComponent,
    BookCardComponent,
    MainComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    BookListComponent,
    BookCardComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
