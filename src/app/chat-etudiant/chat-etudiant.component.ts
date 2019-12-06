import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppService } from "../services/app.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-chat-etudiant",
  templateUrl: "./chat-etudiant.component.html",
  styleUrls: ["./chat-etudiant.component.scss"]
})
export class ChatEtudiantComponent implements OnInit {
  chatForm = this.fb.group({
    prenom: ["", Validators.required],
    age: [18, Validators.min(16)]
  });
  blurBackground$: Observable<boolean>;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.blurBackground$ = this.appService.navOpen$;
  }

  onSubmit() {
    console.log(this.chatForm.get("prenom").value);
  }
}
