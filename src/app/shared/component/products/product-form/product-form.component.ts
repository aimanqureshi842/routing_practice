import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/productInterface';
import { ProductService } from 'src/app/shared/service/product.service';
import { SnacbarService } from 'src/app/shared/service/snacbar.service';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { PriceValidator } from 'src/app/shared/validators/onlydigitsValidator';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
discountArr:number[]=[10,20,30,40,50,60,70,80,90];
productForm!:FormGroup;
productId!:string;
productInfo!:Iproduct;
isInEditMode:boolean=false;
  constructor(private _uuidService:UuidService,
    private _productService:ProductService,
    private _router:Router,
    private _routes:ActivatedRoute,
    private _snackbarService:SnacbarService
  ) { }

  ngOnInit(): void {
    this.createProductForm()
    this.getParamsndupdatePro()
  }
  createProductForm(){
this.productForm=new FormGroup({
  productName:new FormControl(null,Validators.required),
  productStatus:new FormControl(null,Validators.required),
  canReturn:new FormControl(null,Validators.required),
  //product description goes here
  productDescription:new FormArray([
    new FormControl(null,Validators.required),
  ]),
  price:new FormControl(null,[Validators.required,PriceValidator.validPrice]),
  discount:new FormControl(null),
  exchangeOffer:new FormControl(null),
  image:new FormControl(null,Validators.required)
})
  }
  getParamsndupdatePro(){
  this.productId=this._routes.snapshot.params['pId'];
  if(this.productId){
    this.isInEditMode=true;
    // let product=this.productForm.value;
    // this.productInfo=this.productForm.patchValue(product)
    this._productService.fetchProductDetails(this.productId)
    .subscribe({
      next:data=>{
        this.productInfo=data
        this.productForm.patchValue(this.productInfo)
      },
      error:err=>{
        this._snackbarService.openSnackBar(err)
      }
    })
  }
  }

get f(){
return this.productForm.controls
}
get productsDesArr(){
  return this.f['productDescription'] as FormArray
}

addProduct(){

  if(this.productForm.valid){
  let addProduct={...this.productForm.value,productId:this._uuidService.uuid()};
  addProduct.price=+this.productForm.controls['price'].value;
  addProduct.canReturn=+this.productForm.controls['canReturn'].value;
  this.productForm.reset();
  this._productService.addProduct(addProduct);
  this._router.navigate(['products'])
  this._snackbarService.openSnackBar(`The product "${addProduct.productName}" added successfully!!`)
  console.log(addProduct)
}
}

updatedProd(){
if(this.productForm.valid){
  let updatedObj={...this.productForm.value,productId:this.productId}
  // console.log(updatedObj);
  this._productService.updatedObj(updatedObj);
  this.productForm.reset();
  this._snackbarService.openSnackBar(`The product "${updatedObj.productName}" updated successfully!!!`)
  this._router.navigate(['products'])
}
}
addDesc(){
  if(this.productsDesArr.valid){
  let fControl=new FormControl(null,Validators.required);
  this.productsDesArr.push(fControl)
}
}
removeDes(i:number){
this.productsDesArr.removeAt(i)
}
}
