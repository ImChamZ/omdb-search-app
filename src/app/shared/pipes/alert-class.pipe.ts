import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alertClass',
})
export class AlertClassPipe implements PipeTransform {
  transform(alertType: unknown, ...args: unknown[]): unknown {
    switch (alertType) {
      case 'DEFAULT':
        return 'default';
      case 'ERROR':
        return 'error';
    }
    return null;
  }
}
