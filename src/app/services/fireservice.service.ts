import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList  } from '@angular/fire/compat/database';
import Sensor from '../models/sensor';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  private dbPath = '/sensor';
  tutorialsRef: AngularFireList<Sensor>  ;

  constructor(private db: AngularFireDatabase) { 
    this.tutorialsRef = db.list(this.dbPath);
  }


  getAll(): AngularFireList<Sensor> {
    return this.tutorialsRef;
  }

}
