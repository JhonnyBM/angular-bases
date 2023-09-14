import { Component } from '@angular/core';
@Component({
    selector: 'app-counter',
    template: `
    <h3>contador: {{contador}}</h3>
    <button (click)="changeBy(+1)">+</button>
    <button (click)="reset()">Reset</button>
    <button (click)="changeBy(-1)">-</button>
    `
})
export class CounterComponent{
    public contador:number= 20;

    changeBy(value:number):void {
        this.contador+=value;
    }
    reset():void{
        this.contador=20;
    }
}