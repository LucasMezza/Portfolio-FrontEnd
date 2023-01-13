import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  person!: Person;
  constructor(private personService: PersonService) { }

   ngOnInit(): void {
    this.getPersona();
    console.log(this.person);
  }

  getPersona(){
    this.personService.getPersonas().subscribe(data => {
 this.person = data[0];
    })
  }

}