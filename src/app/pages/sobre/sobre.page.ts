import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class SobrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
