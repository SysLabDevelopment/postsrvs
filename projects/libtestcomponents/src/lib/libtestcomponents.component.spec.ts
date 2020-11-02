import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibtestcomponentsComponent } from './libtestcomponents.component';

describe('LibtestcomponentsComponent', () => {
  let component: LibtestcomponentsComponent;
  let fixture: ComponentFixture<LibtestcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibtestcomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibtestcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
