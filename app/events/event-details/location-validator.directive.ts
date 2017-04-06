import {Directive} from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (this.isLocationValid(addressControl, cityControl, countryControl)
      || this.isOnlineUrlValid(onlineUrlControl)) {
      return null;
    }

    return {validateLocation: false};
  }

  private isLocationValid(addressControl: AbstractControl, cityControl: AbstractControl, countryControl: AbstractControl): boolean {
    return addressControl && addressControl.value
      && cityControl && cityControl.value
      && countryControl && countryControl.value;
  }

  private isOnlineUrlValid(onlineUrlControl: AbstractControl) {
    return onlineUrlControl && onlineUrlControl.value;
  }

}
