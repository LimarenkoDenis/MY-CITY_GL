import { CustomSerializer } from './custom-route-serializer';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserEffects } from './effects/user.effects';
import { MyCityModule } from './my-city/my-city.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // MyCityModule,
    UsersModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule.forRoot([
      {path: '', component: UsersComponent},
      {path: 'users/:id', component: UsersComponent},

      { path: 'city', loadChildren: './my-city/my-city.module#MyCityModule'}
    ]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
