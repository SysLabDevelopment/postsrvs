import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Courier1Page } from './courier1.page';

describe('Courier1Page', () => {
  let component: Courier1Page;
  let fixture: ComponentFixture<Courier1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Courier1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Courier1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
