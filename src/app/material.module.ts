import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


@NgModule({
	exports: [MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class MaterialModule {}