import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  c:any;
  text:any;
  
  constructor(public tts: TextToSpeech, public camera:Camera, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  textS(){
    this.tts.speak(this.text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  conCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.c = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }



}
