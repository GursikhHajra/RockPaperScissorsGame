import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NodeService } from '../node.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  outMsg: any = { msg: '', cId: '' };
  wins: number = 0;
  losses: number = 0;
  ties: number = 0;
  totalMsg: string = "";
  runningTotal: string = "";
  cId: any; 

  constructor(private node: NodeService, public alert: AlertController) { }

  async check(){
    if (this.cId < 1 || this.cId > 3){
      const alert = await this.alert.create({
        header: 'Invalid Input',
        subHeader: '', 
        message: "Please enter a number between 1 and 3",
        buttons: [{
          text: "Ok", 
          handler: () => {console.log('ok was clicked')}
        }]
      })

      await alert.present()
    }
    else{
      console.log('this is cID: ' + this.cId)
      const params = {
        cid: this.cId
      };
      this.node.retrieve(params)
        .subscribe(data => {
          this.outMsg = data;
          this.getResult(this.outMsg.msg)
        },
          (err: HttpErrorResponse) => {
            console.log("Error mess: " + err.message);
           this.outMsg.msg = err.message;
          });
    
    }
  }

  getResult(msg){
    console.log("This is msg: " + msg)

    if(msg == 'You Win!!! '){
      this.wins++
      console.log(this.wins)
    }
    else if(msg == 'You Lose '){
      this.losses++
      console.log(this.losses)
    }
    else if(msg == 'Its a Tie '){
      this.ties++
      console.log(this.ties)
    }

    this.runningTotal = ("Wins: " + this.wins + " Losses: " + this.losses + " Ties: " + this.ties);

    if (this.wins > this.losses){
      this.totalMsg = "You are Winning!!!"
    }
    else if(this.wins < this.losses){
      this.totalMsg = "You are losing"
    }
    else{
      this.totalMsg = "No Winner, Its a Tie"
    }



  }
}
