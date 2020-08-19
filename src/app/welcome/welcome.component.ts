import { Component, OnInit } from '@angular/core';
import {AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome '
  welcomeMessageFromService: string;
  name='';

  //used ActivatedRoute for router parameters
  constructor(private route:ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
  }


  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
  }

handleSuccessfulResponse(response){
  this.welcomeMessageFromService = response.message;
  // console.log(response.message);
}

handleErrorResponse(error){
  this.welcomeMessageFromService = error.error.message;
}


}

