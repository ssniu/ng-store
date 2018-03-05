import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    private products: Product[]= [
        new Product(1,"first product", 23.90, 3.5, "this is the first product",["book","study"]),
        new Product(2,"T shirt", 19.90, 4.5, "white, short sleeve",["cloth","men"]),
        new Product(3,"girls sneak", 13.90, 2.5, "pink, light, leather",["women","girl", "shoes"]),
        new Product(4,"skinny jean", 33.90, 3.0, "light blue,long,high-waist",["cloth","women","pants"]),
        new Product(5,"skinny jean", 33.90, 3.0, "light blue,long,high-waist",["cloth","women","pants"]),
        new Product(6,"Tv stand", 11.90, 4.0, "black, wood,fine",["furniture","home","tv"])
  ];

  private comments: Comment[] =[
      new Comment(1,1,"2018-1-2 12:20:22", "John", 3, "Great product"),
      new Comment(2,1,"2018-2-2 13:20:22", "Johnny", 2, "Good product"),
      new Comment(3,1,"2018-1-12 22:20:22", "Majohn", 3.5, "Fits me"),
      new Comment(4,2,"2018-1-22 15:20:22", "Jacksohn", 2, "Recommend"),
      new Comment(5,2,"2018-2-20 102:20:22", "Marohn", 4, "Great value set")
  ];

  constructor() { }

  getProducts(){
      return this.products;
  }

  getProduct(id:number): Product{
      return this.products.find((product)=>product.id == id);
  }

  getCommentsForProductId(id:number): Comment[]{
      return this.comments.filter((comment: Comment)=>comment.productId == id );
  }

  getAllCategories(): string[]{
      return ['cloth','men','women','furniture','book'];
  }

  /*
  //use http service to get data from BE
  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
      return this.http.get('api/products').map(res => res.json());
  }

  getProduct(id:number): Observable<Product>{
      return this.http.get('api/product/' + id).map(res => res.json());
  }

  getCommentsForProductId(id:number): Observable<Comment[]>{
      return this.http.get('api/product/' + id + '/comments').map(res => res.json());
  }

  getAllCategories(): string[]{
      return ['cloth','men','women','furniture','book'];
  }
  */

}



//product model class
export class Product {

    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ){

    }
}

export class Comment {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public content: string
    ){

    }
}
