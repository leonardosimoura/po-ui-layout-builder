import { Component, OnInit, ChangeDetectorRef, IterableDiffers, Input } from '@angular/core';
import { PoListViewComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-po-list-view-fake',
  templateUrl: './po-list-view-fake.component.html',
  styleUrls: ['./po-list-view-fake.component.css']
})
export class PoListViewFakeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  @Input('p-items')
  items: any[] = [];

  @Input('p-property-title')
  propertyTitle: string = "email";

  @Input('p-height')
  height: number = 500;

}
