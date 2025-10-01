import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../models/productInterface';
import { SnacbarService } from '../../service/snacbar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productsArr:Iproduct[]=[]
  constructor(private _productService:ProductService,
    private _snackBar:SnacbarService
  ) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
    this._productService.fetchAllProducts()
    .subscribe({
      next:data=>{
      this.productsArr=data
      },
      error:err=>{
        this._snackBar.openSnackBar(err)

      }
    })
  }

}
