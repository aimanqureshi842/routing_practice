import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/productInterface';
import { ProductService } from 'src/app/shared/service/product.service';
import { SnacbarService } from 'src/app/shared/service/snacbar.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
productId!:string;
productInfo!:Iproduct;
  constructor(
    private _routes:ActivatedRoute,
    private _productService:ProductService,
    private _snackBar:SnacbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getParams()
  }
  getParams(){
this.productId=this._routes.snapshot.params['pId'];
if(this.productId){
  this._productService.fetchProductDetails(this.productId)
  .subscribe({
    next:data=>{
  this.productInfo=data
    },
    error:err=>{
  this._snackBar.openSnackBar(err)
    }
  })
}

  }

  removePro(){
    this._productService.removePro(this.productInfo);
    this._router.navigate(['products']);
    this._snackBar.openSnackBar(`The product "${this.productInfo.productName}" removed successfully!!!`)
  }
}
