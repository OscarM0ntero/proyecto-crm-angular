import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string;
  yyyy: number;
  constructor() { }

  ngOnInit() {
    this.version = version;
    this.yyyy = new Date().getFullYear();
  }

}
