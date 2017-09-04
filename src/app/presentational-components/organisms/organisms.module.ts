import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainDetailComponent } from './main-detail/main-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [SideMenuComponent, FooterComponent, HeaderComponent, MainComponent, MainListComponent, MainDetailComponent],
  exports: [SideMenuComponent, FooterComponent, HeaderComponent, MainComponent, MainListComponent, MainDetailComponent]
})
export class OrganismsModule { }
