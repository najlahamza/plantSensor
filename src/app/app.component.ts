import { Component } from '@angular/core';
import { AngularFireDatabase,AngularFireList  } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase Data';

  sensors: any =[];
  currentsensor = null;
  currentIndex = -1;
  temp='';

  constructor(private db: AngularFireDatabase) { }
  ngOnInit(): void {
    const ref=this.db.list("sensor");
    ref.valueChanges().subscribe( (data)=> {
        this.sensors=data;
    })
    }



}
