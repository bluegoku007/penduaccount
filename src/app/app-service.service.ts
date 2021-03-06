import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./services/error-handler.service";
import { app } from "./models/app";
import { Produit } from "./insta/produit";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private url = "http://localhost:3000/app";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) {}

  fetchAll(): Observable<Produit[]> {
    return this.http
      .get<Produit[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched produits")),
        catchError(
          this.errorHandlerService.handleError<Produit[]>("fetchAll", [])
        )
      );
  }

  post(username: Partial<Produit>): Observable<any> {
    return this.http
      .post<Partial<Produit>>(this.url, username, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  update(Produit: Produit): Observable<any> {
    return this.http
      .put<Produit>(this.url, Produit, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  }

  delete(id: number): Observable<any> {
    const url = `http://localhost:3000/app/${id}`;

    return this.http
      .delete<Produit>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
  }
}