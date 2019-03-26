import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { StatusPipe } from './status.pipe';


@NgModule({
  declarations: [UsersComponent, StatusPipe],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
