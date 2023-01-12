import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  // persona!: Person;
  // constructor(private personService: PersonService) { }

  ngOnInit() {
  //   this.getPersona();
  }

  // getPersona(){
  //   this.personService.getPersona(1).subscribe(data => {
  //     this.persona = data;
  //   })
  // }

}
