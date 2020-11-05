import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
 template: `
        <h2>ngStyle</h2>

        <button (click)="big=!big">Big {{big ? 'off' : 'on'}}</button>
        <button (click)="back=!back">Background {{back ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>
        <button (click)="bord=!bord">Border {{bord ? 'off' : 'on'}}</button>

        <textarea class="box"  [ngStyle]="myStyles()">
          sathish chary kotha
        </textarea>

        <h3>Style binding</h3>
        <button (click)="brighter=!brighter">Bright {{brighter ? 'off' : 'on'}}</button>

       <p #part2 class="box" [style.font-size.px]="brighter ? 26 : 14"
                             [style.background-color]="brighter ? 'Pink' : 'White'">
            {{part2.style.cssText}}
        </p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

    brighter = false;
    big = false;
    back = false;
    bord = false;

    myStyles(): any {
        return {
            'font-size' : this.big ? '26px' : '14px',
            'color' : this.back ? 'Blue' : 'blue',
            'background-color' : this.back ? 'Pink' : 'green',
            'border' : this.bord ? '1px solid Red' : ''
        };
    }
}
