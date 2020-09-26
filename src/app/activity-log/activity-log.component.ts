import { Component, Input } from "@angular/core";
import { Info } from "../information.service";

@Component({
  selector: "app-activity-log",
  templateUrl: "./activity-log.component.html",
  styleUrls: ["./activity-log.component.css"],
})
export class ActivityLogComponent {
  @Input() infos: Info;

  today: Date = new Date();
}
