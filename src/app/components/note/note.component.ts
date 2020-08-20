import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MapService } from 'src/app/services/sys/map.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {
  public note: string;

  constructor(
    private sysMap: MapService,
    public viewCtrl: PopoverController
  ) { }
  @Input() public orderId: string;
  ngOnInit() {
    this.note = localStorage.getItem(this.orderId);
  }
  public saveNote() {
    localStorage.setItem(this.orderId, this.note);
    this.sysMap.infoUpdated.next();
    this.viewCtrl.dismiss();
  }
}
