import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  selecteFiled: any;
  array = [1, "2", 6, 0.5, "6366"];

  selectArray = ["Section", "StepAction", "step", "step"];

  constructor() {
    this.selecteFiled = this.selectArray[0];
  }

  valueChange(value) {
    console.log(value);

    console.log(this.selecteFiled);
  }

  valueUpdated() {
    setTimeout(() => {
      this.selecteFiled = "Section";
      console.log(this.selecteFiled);
    }, 3);
  }
}
