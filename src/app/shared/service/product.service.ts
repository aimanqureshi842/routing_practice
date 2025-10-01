import { Injectable } from '@angular/core';
import { Iproduct } from '../models/productInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products: Iproduct[] = [
  {
    productId: "201",
    productName: "Samsung Galaxy S24 FE 5G (Graphite, 128 GB)",
    productStatus: "delivered",
    canReturn: 1,
    productDescription: [
      "8 GB RAM | 128 GB ROM",
      "17.02 cm (6.7 inch) Full HD+ Display",
      "50MP + 12MP Rear Camera | 10MP Front Camera",
      "4700 mAh Battery",
      "Exynos 2400e Processor",
      "1 Year Manufacturer Warranty for Device",
      "6 Months Warranty for In-Box Accessories"
    ],
    // url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/p/o/-original-imahfw4aasyhherc.jpeg?q=70",
    price: 29999,
    discount: 50,
    // offer:"50% off",
    exchangeOffer: "Upto ₹20,900 Off on Exchange",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/p/o/-original-imahfw4aasyhherc.jpeg?q=70"
  },
  {
    productId: "202",
    productName: "Apple MacBook Air M2 (13-inch, 256GB)",
    productStatus: "in-progress",
    canReturn: 1,
    productDescription: [
      "Apple M2 Chip with 8-core CPU and 8-core GPU",
      "13.6-inch Liquid Retina Display",
      "8 GB RAM | 256 GB SSD Storage",
      "Up to 18 hours battery life",
      "MagSafe 3 charging port",
      "1 Year Apple Warranty"
    ],
    // url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/n/e/-original-imahgfdynptze8qb.jpeg?q=70",
    price: 99999,
    discount:10,
    // offer:"10% off",
    exchangeOffer: "Upto ₹15,000 Off on Exchange",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/n/e/-original-imahgfdynptze8qb.jpeg?q=70"
  },
  {
    productId: "203",
    productName: "Noise ColorFit Pro 5 Smartwatch",
    productStatus: "dispatched",
    canReturn: 1,
    productDescription: [
      "1.85 inch AMOLED Display with Always-On Mode",
      "Bluetooth Calling Support",
      "100+ Sports Modes & Health Tracking",
      "SpO2, Heart Rate, and Sleep Monitoring",
      "Water Resistant Design",
      "7 Days Battery Life"
    ],
    // url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/w/h/-original-imahfyzgz2hjyfgg.jpeg?q=70",
    price: 3999,
    discount:30,
    // offer:"30% off",
    exchangeOffer: "Upto ₹500 Off on Exchange",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/b/w/h/-original-imahfyzgz2hjyfgg.jpeg?q=70"
  }
];
  constructor() { }
  fetchAllProducts():Observable<Iproduct[]>{
    return of(this.products)
  }
  fetchProductDetails(id:string):Observable<Iproduct>{
    let findObj=this.products.find(product=>product.productId===id) as Iproduct
    return of(findObj)

  }
  addProduct(product:Iproduct){
  this.products.push(product)
  }
  updatedObj(updatedObj:Iproduct){
let getindex=this.products.findIndex(prod=>prod.productId===updatedObj.productId)
this.products[getindex]=updatedObj
  }
removePro(prod:Iproduct){
let getIndex=this.products.findIndex(pro=>pro.productId===prod.productId  )
      this.products.splice(getIndex,1)
}


}
