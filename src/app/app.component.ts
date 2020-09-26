import { Component, OnInit } from "@angular/core";
import { InformationService } from "./information.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  infos: any[];

  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.infos = this.informationService.getInfo();
  }

  addInfo(counter) {
    this.infos = [{ counter }, ...this.infos];
    console.log(this.infos);
  }
}
