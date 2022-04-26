import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-alert',
  template: `
    <p>
      alert works!
    </p>
  `,
  styles: [
  ]
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
