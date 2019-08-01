import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLiked = false;
  public initialCount = 100;

  increaseCounter() {

    if (this.isLiked) {
      this.initialCount = this.initialCount - 1;
      this.isLiked = false;
    } else {
      this.initialCount = this.initialCount + 1;
      this.isLiked = true;
    }
  }
}
