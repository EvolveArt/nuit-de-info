import { Component, OnInit } from "@angular/core";
import { AppService } from "../services/app.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  blurBackground$: Observable<boolean>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.blurBackground$ = this.appService.navOpen$;
  }
}
