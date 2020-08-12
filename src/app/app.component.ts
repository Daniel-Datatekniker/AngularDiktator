import { Component } from '@angular/core';
import {Diktators} from '../app/diktators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diktator';

  allDiktators:Array<Diktators> = Array();



  onSubmit(data)
  {
  
    if(data['name'] == ""|| data['lastname'] == "" || data['description'] == "" || data['date'] == "")
    {
     
      alert("Missing data");
    }
    else
    {

      let greater = new Diktators(data['name'], data['lastname'], data['description'],data['date']);
      //console.log(greater.name + " " + greater.lastname + " " + greater.description + " " + greater.birth)
      this.allDiktators.push(greater);
    }
      
  }

  onDelete(data : Diktators)
  {

    this.allDiktators.splice(this.allDiktators.indexOf(data), 1);
  }
}
