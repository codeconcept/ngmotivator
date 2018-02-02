import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatCardModule } from '@angular/material';


@NgModule({
	exports: [MatToolbarModule, MatTabsModule, MatCardModule]
})
export class MaterialModule {}