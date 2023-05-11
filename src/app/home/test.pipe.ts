import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(p: any, wish: string): string {
    // console.log('data :', value);
    // console.log(args);
    if (p.gender == 'f') {
      return `Hello miss ${p.name} ${wish}`;
    } else {
      return `Hello Mr ${p.name} ${wish}`;
    }
    return 'hello';
  }
}
