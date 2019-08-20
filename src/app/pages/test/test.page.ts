import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { StateService } from '../../services/state.service';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDragMove, CdkDropList} from '@angular/cdk/drag-drop';
import { ExtendedScrollToOptions , CdkScrollable, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) VS:CdkVirtualScrollViewport;
  @ViewChildren(CdkDrag) DragItems:CdkDrag[];
  @ViewChild(CdkDropList) Drop_L:CdkDropList;
  
  
  public td:any;
  private i=0;
  private dropStart:boolean = false;
  private dropIndexStart:Number = null;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];
  constructor(private state:StateService) {
    this.td = this.state.testData;
  
    this.i  = this.state.testData.length;    
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let self = this;
    // this.DragItems.forEach(DragItem => {
    //   self.ItemMove(DragItem);
    // });
    this.Drop_L.sorted.subscribe((item) => {
      console.log('is_dragged', item);
      self.ItemMove(item);
    })
  }

  public ItemMove(DragItem){
    let c_ind = DragItem.currentIndex;
    let p_ind = DragItem.previousIndex;
    let delta = c_ind - p_ind;

  
    console.log('offsetToTop' ,this.VS.measureScrollOffset('top'));
    console.log('offsetToBottom' ,this.VS.measureScrollOffset('bottom'));
    console.log('element_h', DragItem.item.element.nativeElement.offsetHeight);
    console.log('element_item', DragItem.item);
    console.log('element_item_element', DragItem.item.element);
    console.log('element_item_element_native', DragItem.item.element.nativeElement);
    


  
    // console.log('range',self.VS.measureScrollOffset('top') );
    // console.log('item', DragItem.item);
    // console.log(delta);
    // if (Math.abs(delta) > 2){
    //   if (delta < 0){
    //     console.log('ВМТ');
    //   } else {
    //     console.log('НМТ');
    //   }
    // }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.td, event.previousIndex, event.currentIndex);
  }


  public initStates(){
    this.i  = this.state.testData.length +1;
    for (var i = this.i; i < this.i + 10; i++){
      this.state.testData.push({name: "test" + i});  
    }
  }

  public scrollT(){
    let s_options:ExtendedScrollToOptions ={top:0,behavior:'smooth'};
    
    this.VS.scrollTo(s_options);
  }


  public add(){
    this.i  = this.state.testData.length +1;
    this.state.testData.push({name: "test" + this.i});
  }

  public delete(){
    this.td.pop();
  }

}
