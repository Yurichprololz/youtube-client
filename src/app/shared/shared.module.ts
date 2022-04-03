import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NotFoundComponent,
  ],
})
export class SharedModule { }
