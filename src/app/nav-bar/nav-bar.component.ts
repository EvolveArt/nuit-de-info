import { Component, OnInit } from "@angular/core";
import { AppService } from "../services/app.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  navOpen$: Observable<boolean>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.navOpen$ = this.appService.navOpen$;
  }

  toggleNav() {
    this.appService.navToggle();
  }
}
