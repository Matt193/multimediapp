import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MultimediaItem {
  imageUrl: string;
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private multimediaCollection = collection(this.firestore, 'multimedia');

  constructor(private firestore: Firestore) {}

  // Guardar un registro
  addMultimedia(item: MultimediaItem): Promise<any> {
    return addDoc(this.multimediaCollection, item);
  }

  // Obtener todos los registros
  getMultimedia(): Observable<MultimediaItem[]> {
    return collectionData(this.multimediaCollection, { idField: 'id' }) as Observable<MultimediaItem[]>;
  }
}
