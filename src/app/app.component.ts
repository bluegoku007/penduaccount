import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs';
import { Produit } from './insta/produit';
import { ErrorHandlerService } from './services/error-handler.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  app$:Observable<Produit[]>;
  title="produit"
  username: string
  password:string
  email:string
  email_password:string
  type:string
  contact_email:string
  AppServiceService: any;
  private url:"http://localhost:3000/app";
  httpOptions:{headers:HttpHeaders}={
    headers:new HttpHeaders({"content-type":"application.json"})
  }
  constructor(private errorHandlerService:ErrorHandlerService,private http:HttpClient){

  }
  ngOnInit(): void {
  }
  fetchAll(): Observable<Produit[]> {
    return this.AppServiceService.fetchAll();
  }
  postData():void{
    let url="http://httpbin.org/post"
   this.http.post(url,{
    username:this.username,
    password:this.password,
    email:this.email,
    email_password:this.email_password,
    contact_email:this.contact_email,
    type:this.type,
  }).toPromise().then((data:any)=>{
    console.log(data)
    console.log(JSON.stringify(data.json))
    this.app$ = this.AppServiceService
    .post({ data })
    .pipe(tap(() => (this.app$ = this.fetchAll())));
  })
  }
  delete(id: number): void {
    this.app$ = this.AppServiceService
      .delete(id)
      .pipe(tap(() => (this.app$ = this.fetchAll())));
  }
  /*post(Produit: Partial<Produit>): void {
    const username = (<string>Produitusername).trim();
    if (!username) return;

    this.app$ = this.AppServiceService
      .post({ username })
      .pipe(tap(() => (this.app$ = this.fetchAll())));}*/
}
