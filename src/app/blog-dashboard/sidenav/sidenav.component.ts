import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

const IS_WIDE_THRESHOLD = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
    private addNewDialog: MatDialog,
  ) {
      this.mediaMatcher.addListener(mq => {
        this.ngZone.run( () => this.mediaMatcher = mq);
    });
  }

  private mediaMatcher = matchMedia(`(max-width: ${IS_WIDE_THRESHOLD}px)`);

  ngOnInit() {
  }

  isWide() {
    return !this.mediaMatcher.matches;
  }

  openAddDialogue() {
    this.addNewDialog.open(EditDialogComponent, {
      width: '80%',
      height: '90%',
      data: {
        id: 'new'
      }
    });
  }

}
