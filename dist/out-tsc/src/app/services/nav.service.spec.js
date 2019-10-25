import { TestBed } from '@angular/core/testing';
import { NavService } from './nav.service';
describe('NavService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NavService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=nav.service.spec.js.map