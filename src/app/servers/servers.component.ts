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
  serverName = '';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  showSecret = false;
  log = [];

  onToggleDetails(){
      this.showSecret = !this.showSecret;
      //this.log.push(this.log.length + 1)
      this.log.push(new Date())  
  }
  
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  usernameIsEmpty() {
    if(this.username == null || this.username.length == 0){
      return true;
    }
    else false;
  }

  emptyUsername(){
    this.username = null;
  }
  
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
