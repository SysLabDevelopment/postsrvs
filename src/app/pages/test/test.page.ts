import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { StateService } from '../../services/state.service';
import { CdkDragDrop, moveItemInArray, CdkDrag, CdkDragMove, CdkDropList } from '@angular/cdk/drag-drop';
import { ExtendedScrollToOptions, CdkScrollable, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {


  constructor(private state: StateService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
