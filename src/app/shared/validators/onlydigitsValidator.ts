import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PriceValidator{
    static validPrice(control:AbstractControl):null|ValidationErrors{
        let val=control.value as string;
        if(!val){
            return null
        }
        let regExp=/^[0-9]+$/;
        let isValid=regExp.test(val)
        if(isValid){
          return null
        }else{
        return{
            invalidPrice:'only digits are allowed'
        }

        }

    }
}






