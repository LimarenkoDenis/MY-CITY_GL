import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [CommonModule, MatCardModule, MatButtonModule, FormsModule]
})
export class SharedModule { }
