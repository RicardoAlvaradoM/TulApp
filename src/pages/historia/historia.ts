import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import  "rxjs/add/operator/map";
@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class HistoriaPage {
  channelId: string= 'UCNS8CUnbqo29O_jBXJ1Njvg';
  maxResults: string='5';
  googleToken: string='AIzaSyAnoL8e33y_CXk28lGUauKxQKEAe5jtAyI';
  searchQuery :string = 'Municipio de tulancingo';
  posts: any =[];

  datas:any;
  nextPageToken:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http
            ) {
              let url = " https://www.googleapis.com/youtube/v3/search?id,&part=snippet&channelId="
              + this.channelId + '&q=' + this.searchQuery + '&type=video&order=date&maxResults='
              + this.maxResults + '&key=' + this.googleToken;

              //+ this.channelId + "&q="+ this.search + "&type=videos&order=date&maxResults="
              //+ this.maxRes + "&key="+ this.googleToken;
              this.http.get(url).map(res => res.json()).subscribe(data=>{
                this.posts= this.posts.concat(data.items);
                console.log(this.posts)
              })
            }
}
