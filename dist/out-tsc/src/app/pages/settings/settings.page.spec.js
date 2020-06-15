import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { SettingsPage } from './settings.page';
describe('SettingsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
test('сложение положительных чисел не равно нулю', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
test('ноль', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
test('два плюс два', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    // toBe и toEqual эквивалентны по отношению к числам
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
test('сложение чисел с плавающей запятой', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);         Это не будет работать из-за ошибки округления
    expect(value).toBeCloseTo(0.3); // А это сработает.
});
test('в команде нет места Я', () => {
    expect('команда').not.toMatch(/Я/);
});
test('но есть "ася" в Васе', () => {
    expect('Вася').toMatch(/ася/);
});
const shoppingList = [
    'подгузники',
    'бумажные  носовые платки',
    'мусорные мешки',
    'бумажные полотенца',
    'пиво',
];
test('список покупок содержит пиво', () => {
    expect(shoppingList).toContain('пиво');
    expect(new Set(shoppingList)).toContain('пиво');
});
function compileAndroidCode() {
    throw new Error('вы используете неправильный JDK');
}
test('компиляция android идет как и ожидалось', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
    // Вы также можете использовать то же самое сообщение об ошибке или регулярное выражение
    expect(compileAndroidCode).toThrow('вы используете неправильный JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});
//# sourceMappingURL=settings.page.spec.js.map