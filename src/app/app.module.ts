import { NoteResolver } from './resolver';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { CanActivateGuard } from './canActivateGuard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './notes/note.component';
import { NotesComponent } from './notes/notes.component';
import { UserComponent } from './users/user.component';
import { Secondary1Component } from './secondary/secondary1.component';
import { Secondary2Component } from './secondary/secondary2.component';
import { PageNotFoundComponent } from './page-not-found.component';

const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'redirectMe', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'users/:userid',
    component: UserComponent,
    children: [
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'notes/:noteid',
        component: NoteComponent,
        // canActivate: [CanActivateGuard]
        // canDeactivate: [CanDeactivateGuard]
        // resolve: { note: NoteResolver },
      }
    ]
  },
  { path: 'big-feature', loadChildren: './big-feature/bigFeature.module#BigFeatureModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NoteComponent,
    NotesComponent,
    Secondary1Component,
    Secondary2Component,
    UserComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }












