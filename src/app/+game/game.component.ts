import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Room } from './shared/room.model'
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {
  roomName: string;
  selectedTiles: number[];
  allRoomTiles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  obtainedRoomData:boolean = false;
  initialLoad:boolean = false;
  roomObservable: FirebaseObjectObservable<Room>;
  room: Room;
  lastTileShown: number = 0;

  constructor(private routeSegment:RouteSegment, private af: AngularFire) {
    this.roomName = this.routeSegment.getParam('id');
    //this.game = this.af.database.list('/games/' + this.roomName);
    this.roomObservable = this.af.database.object('/games/' + this.roomName); 
  }

  ngOnInit() {
    this.roomObservable.subscribe((r) =>  {
          if (r) {
            this.room = new Room(this.roomName, r.selectedTiles, r.lastTileShown, r.isComplete);
          } else {
            console.log("Creating room");
            let newRoom = new Room("20", [], 0, false);
            console.log("saving room", newRoom);
            this.roomObservable.set(newRoom);
          }
    });
  }

  showNextTile() {
    console.log("STOP!")
    this.room.nextTile();
    this.roomObservable.set(this.room);
  }
}
