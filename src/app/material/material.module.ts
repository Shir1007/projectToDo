import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


import { FormsModule } from '@angular/forms';



const modules = [MatToolbarModule, MatIconModule,
  MatButtonModule, MatCardModule, MatDividerModule, MatCheckboxModule
  , FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatDialogModule]



@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules], exports: modules
})
export class MaterialModule { }
