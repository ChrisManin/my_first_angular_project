import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../mon-premier/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;
  constructor(private appareilService: AppareilService) { }



  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOff() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    }
  }

  onSwitchOn() {
    if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
