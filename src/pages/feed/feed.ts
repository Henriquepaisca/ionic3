import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: 'Carlos Henrique',
    data: 'Novembro 5, 1995',
    descricao: 'Learning Ionic3',
    qntd_likes: 12,
    qntd_coments: 4,
    time_comment: '11h ago'
  }

  public nome_usuario:string = "Carlos Henrique Paisca";

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
  }

  // ionViewDidLoad() {
  //   this.somaDoisNumeros(10, 10);
  // }

}
