import { TestBed } from '@angular/core/testing';
import { CourierService } from './courier.service';
describe('CourierService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CourierService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=courier.service.spec.js.map