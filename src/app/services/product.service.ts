import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { CollectionReference, DocumentReference, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { BehaviorSubject, Observable, concatAll, map, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  idDoc: string; 
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private item$ = new BehaviorSubject<Product[]>([]);
  private _item$ = new Observable<Product[]>;
  private firestore: Firestore;
  private prodCat:  CollectionReference<DocumentData>

  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.prodCat = collection(this.firestore, 'product-item');
    this.loadProduct();
  }
  async loadProduct() {
    this._item$ = collectionData(this.prodCat, {
      idField: 'idDoc'
    }) as Observable<Product[]>;
    this._item$.pipe(
      map((val) => of(val)),
      concatAll()
    ).subscribe(it => {
      console.log(it)
      this.item$.next(it);      
    })
  }
  async create(cat: Product) {
    const cRef = doc(this.firestore, "product-item", uuidv4());
    setDoc(cRef, cat);
  }

  async update(idDoc: string, data: Product) {
    const docRef: DocumentReference = doc(this.firestore, idDoc);
    await updateDoc(docRef, {data});
  }

  get productItem$() {
    return this.item$.asObservable();
  }
}
