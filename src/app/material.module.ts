import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,MatSlideToggleModule, MatTooltipModule, MatStepperModule, MatDatepickerModule,MatNativeDateModule, MatSortModule, MatTableModule, MatChipsModule, MatTabsModule} from '@angular/material';



@NgModule({
    imports:[MatMenuModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
        MatTableModule,
        MatChipsModule,
        MatTabsModule
    ],
    exports:[MatMenuModule, 
        MatButtonModule,
        MatCardModule, 
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
        MatTableModule,
        MatChipsModule,
        MatTabsModule
    ],
})

export class MaterialModule{}