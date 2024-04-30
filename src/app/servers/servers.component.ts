import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {

  //username: string = null;
  username = '';
  usernameIsEmpty() {
    if(this.username == null || this.username.length == 0){
      return true;
    }
    else false;
  }

  emptyUsername(){
    this.username = null;
  }

  serverName = '';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }
  
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
