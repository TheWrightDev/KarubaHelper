import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log("initted")
  }

  CreateNewGame() {
    let uniqueRoomId = this.getUniqueRoomId();
    this.router.navigate(['/game/' + uniqueRoomId]);
  }

  private getUniqueRoomId(): string {
    // TODO: hit firebase for unique check.
    return this.generateId();
  }

  private generateId(): string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for( var i=0; i < 4; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
