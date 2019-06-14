import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products.module';

@Pipe({
  name: 'forProducts'
})
export class ForProductsPipe implements PipeTransform {

  transform(array: Products[] , forMen: boolean, forWomen: boolean, forChild: boolean, forAll: boolean): any {
    return array.filter((item, i, array) => {
        if (forWomen && forChild) return item.sex === 'Female' && item.sex === 'Child';
        if (forWomen && forMen) return item.sex === 'Female' && item.sex === 'Male';
        if (forMen && forChild) return item.sex === 'Male' && item.sex === 'Child';
        if (forMen) return item.sex === 'Male';
        if (forChild) return item.sex === 'Child';
        if (forWomen) return item.sex === 'Female';
        if (forAll) return array;
    })
  }

}



