import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private navOpened = false;
  navOpen$ = new Subject<boolean>();

  constructor() {}

  navToggle() {
    this.navOpened = !this.navOpened;
    this.navOpen$.next(this.navOpened);
  }
}
