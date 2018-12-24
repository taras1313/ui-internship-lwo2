import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderContactsComponent } from './header/header-contacts/header-contacts.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
    MainComponent
  ], exports: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
    MainComponent
  ],

  imports: [
    CommonModule
  ]
})
export class CoreModule { }
