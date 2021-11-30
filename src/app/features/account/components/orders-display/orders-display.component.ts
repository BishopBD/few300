import { Component, Input, OnInit } from '@angular/core';
import { OrderInfo } from '../../account-info.redux-feature';

@Component({
  selector: 'app-orders-display',
  templateUrl: './orders-display.component.html',
  styleUrls: ['./orders-display.component.scss'],
})
export class OrdersDisplayComponent implements OnInit {
  @Input() loaded: boolean | null = false;
  @Input() orders: OrderInfo[] = [];
  constructor() {}

  ngOnInit(): void {}
}
