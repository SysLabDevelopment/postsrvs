import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VersionPage } from './version.page';

describe('VersionPage', () => {
  let component: VersionPage;
  let fixture: ComponentFixture<VersionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VersionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
