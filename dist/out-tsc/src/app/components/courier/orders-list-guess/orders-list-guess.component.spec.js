import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OrdersListGuessComponent } from './orders-list-guess.component';
describe('OrdersListGuessComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrdersListGuessComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OrdersListGuessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=orders-list-guess.component.spec.js.map