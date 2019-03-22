import { RatingComponent } from './components/damp/rating/rating.component';
import { CardComponent } from './components/damp/card/card.component';
import { ListComponent } from './components/smart/list/list.component';
import { FilterElementsComponent } from './components/damp/filters-elements/filters-elements.component';
import { SharedModule } from './shared/shared.module';
import { AutocompleteComponent } from './components/damp/autocomplete/autocomplete.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/damp/footer/footer.component';
import { NavigationComponent } from './components/smart/navigation/navigation.component';
import { UserComponent } from './components/smart/user/user.component';
import { HeaderComponent } from './components/smart/header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AutocompleteComponent,
    FilterElementsComponent,
    ListComponent,
    CardComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
