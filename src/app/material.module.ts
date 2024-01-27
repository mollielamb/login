import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 


@NgModule({
    imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule
    ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule, 
      MatToolbarModule,
      MatCardModule,
      MatIconModule
      
    ]
  })
  export class MaterialModule { }
  