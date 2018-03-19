import { Component, OnInit, NgZone } from '@angular/core';

const IS_WIDE_THRESHOLD = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private ngZone: NgZone
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
}
