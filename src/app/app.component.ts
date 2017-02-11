import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //   template: `<p-chart #chart type="pie" [data]="data"></p-chart>
    // <button type="button" pButton (click)="update(chart)"></p-button>`,
    template: `
    <h1>My First PrimeNG App</h1>
   <button pButton type="button" label="Click"></button>
   <p-chart type="bar" [data]="data" [options]="options"  ></p-chart>
`,
})
export class AppComponent {
    data: any;
    options: any;
    constructor() {
         this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };

    }
}
