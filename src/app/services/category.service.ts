import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, addDoc, CollectionReference, DocumentData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, concatAll, map, of } from 'rxjs';

export interface Category {
  idDoc: string; 
  name: string;
  path: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private item$ = new BehaviorSubject<Category[]>([]);
  private _item$ = new Observable<Category[]>;
  private firestore: Firestore;
  private prodCat:  CollectionReference<DocumentData>
  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.prodCat = collection(this.firestore, 'product-category');
    this.loadCat();
  }
  async loadCat() {
    this._item$ = collectionData(this.prodCat, {
      idField: 'idDoc'
    }) as Observable<Category[]>;
    this._item$.forEach((a: any) => console.log(a, 5)
    )
    this._item$.pipe(
      map((val) => of(val)),
      concatAll()
    ).subscribe(it => {
      console.log(it)
      this.item$.next(it);      
    })
  }
}
