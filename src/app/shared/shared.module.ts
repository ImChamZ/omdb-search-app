import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAlertComponent } from './components/text-alert/text-alert.component';
import { GrowingSpinnerComponent } from './components/growing-spinner/growing-spinner.component';
import { AlertClassPipe } from './pipes/alert-class.pipe';

@NgModule({
  declarations: [TextAlertComponent, GrowingSpinnerComponent, AlertClassPipe],
  imports: [CommonModule],
  exports: [TextAlertComponent, GrowingSpinnerComponent],
})
export class SharedModule {}
