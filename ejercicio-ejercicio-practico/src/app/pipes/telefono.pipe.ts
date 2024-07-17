import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonoValidator',
  standalone: true
})
export class TelefonoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const phoneRegex = /^(\d{3})(\d{4})(\d{4})$/;
    return value.replace(phoneRegex, '+$1 $2 $3');
  }
}
