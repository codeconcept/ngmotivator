import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

@NgModule({
	exports: [MatToolbarModule, MatTabsModule]
})
export class MaterialModule {}