import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, Comment, ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {

    product: Product;
    comments: Comment[];
//new variable to store the new comment and rating
    newRating: number = 5;
    newComment: string = '';

    //toggle add comemnt div
    isCommentHidden = true;

  constructor(private routerInfo:ActivatedRoute,
         private productService: ProductService
  ) { }

  ngOnInit() {
      let productId: number = this.routerInfo.snapshot.params["productId"];
      //console.log(productId);
      //this.productTitle = this.routerInfo.snapshot.params["prodTitle"];
      this.product = this.productService.getProduct(productId);
      //get the data from BE
      //this.productService.getProduct(productId).subscribe( product => this.product = product)
       //this.productService.getCommentsForProductId(productId).subscribe( comments => this.comments = comments)
      console.log(this.product);
      this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment(){
      let comment = new Comment(0, this.product.id, new Date().toISOString(), 'Matthew',
                   this.newRating, this.newComment);
      this.comments.unshift(comment);//add it to the first

      //calculate the total star
      //reduce: iterate the rating
      let sum = this.comments.reduce((sum, comment)=> sum + comment.rating, 0);
      this.product.rating = sum / this.comments.length; //calculate average comment

      //clear the input
      this.newComment = null;
      this.newRating = 5;
      this.isCommentHidden = true;
  }



}
