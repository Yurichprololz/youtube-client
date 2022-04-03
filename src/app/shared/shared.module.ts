import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginWindowComponent } from './components/login-window/login-window.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    LoginWindowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
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
