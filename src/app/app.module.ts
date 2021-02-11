import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { NoItemSelectedComponent } from './components/no-item-selected/no-item-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    SidebarComponent,
    ItemsListComponent,
    ItemComponent,
    HeaderComponent,
    AddFormComponent,
    NoItemSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
