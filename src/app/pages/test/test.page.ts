import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { StateService } from '../../services/state.service';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDragMove, CdkDropList} from '@angular/cdk/drag-drop';
import { ExtendedScrollToOptions , CdkScrollable, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  @ViewChild(CdkVirtualScrollViewport,{static:false}) VS:CdkVirtualScrollViewport;
  @ViewChildren(CdkDrag) DragItems : QueryList<CdkDrag>;
  @ViewChild(CdkDropList,{static:false}) Drop_L:CdkDropList;
  
  
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
    this.Drop_L.autoScrollDisabled = false;

    this.DragItems.changes.subscribe((r) =>{
      self.DragItems.forEach(DragItem => {
        DragItem.dragStartDelay = 500;
        console.log('DragItem',DragItem);
      })
    })
    // this.Drop_L.sorted.subscribe((item) => {
    //   console.log('is_dragged', item);
    //   self.ItemMove(item);
    // })
  }

  public ItemMove(DragItem){
    this.VS.checkViewportSize();
    let c_ind = DragItem.currentIndex;
    let p_ind = DragItem.previousIndex;
    let delta = c_ind - p_ind;
    let item_size = 60;
    let offset_top = this.VS.measureScrollOffset('top');
    let offset_btm = this.VS.measureScrollOffset('bottom');
    let content_size = this.VS.measureRenderedContentSize();
    let viewport_size = content_size - (offset_btm + offset_top);
    let offset_top_to_item = c_ind * item_size; 
  
    console.log('offsetToTop' ,offset_top);
    console.log('offsetToBottom' ,offset_btm);
    console.log('rendered_content' ,content_size);
    console.log('element_h', 60);
    console.log('viewport_size', viewport_size);
    console.log('offset_top_to_item', offset_top_to_item);
    
    if (delta < 0 && offset_top > 0){
      if (offset_top_to_item < offset_top + 70){
        console.log('ВМТ');
        let n_top_offset = item_size*2;
        if (offset_top < n_top_offset){
          this.VS.scrollToOffset(0,'smooth');
          this.Drop_L.start();
        } else {
          this.VS.scrollToOffset(offset_top - n_top_offset,'smooth');
          this.Drop_L.start();
        }
      }  
    }else if (delta > 0 && offset_btm > 0){
      if (offset_top_to_item > (offset_top + viewport_size - 70)){
        console.log('НМТ');
        let n_btm_offset = item_size*2;
        if (offset_btm < n_btm_offset){
          this.VS.scrollToOffset(content_size - viewport_size,'smooth');
          this.Drop_L.start();
        } else {
          this.VS.scrollToOffset(offset_top + n_btm_offset, 'smooth');
          this.Drop_L.start();
        }
      }
    }

  
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
