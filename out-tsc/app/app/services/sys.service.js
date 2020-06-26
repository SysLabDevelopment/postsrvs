import { __awaiter, __decorate, __metadata } from "tslib";
// Здравый код, растущий рядом с какахами
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import { ToastController } from '@ionic/angular';
let SysService = class SysService {
    constructor(http, device, toastController) {
        this.http = http;
        this.device = device;
        this.toastController = toastController;
        this.proxy = 'http://mobile.postsrvs.ru:8080/';
    }
    //Получение списка заказов по idшникам
    getOrders(ids) {
        const url = this.proxy + "https://mobile.postsrvs.ru/mobile/orders";
        let data = {
            'uuid': this.device.uuid,
            'action': 'getOrders',
            'orders_id': ids
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        return this.http.post(url, data, httpOptions);
    }
    //Тост
    presentToast(message, color, header = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                message: message,
                duration: 3000,
                color: color,
                position: 'bottom'
            });
            toast.present();
        });
    }
    goToWork(dates) {
        const url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
        let data = {
            "type": "goToWork",
            "dates": dates,
            "courieriId": localStorage.user,
            "uuid": this.device.uuid
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        return this.http.post(url, data, httpOptions);
    }
    getNotWorkRules() {
        const url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
        let data = {
            "type": "rules",
            "courieriId": localStorage.user,
            "uuid": this.device.uuid
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        return this.http.post(url, data, httpOptions);
    }
    //Отправка данных о нерабочих днях и причинах
    stopWork(dates) {
        const url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
        let data = {
            "type": "stopWork",
            "dates": dates,
            "courieriId": localStorage.user,
            "uuid": this.device.uuid
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        return this.http.post(url, data, httpOptions);
    }
    //Возвращает сигнатуру, кодированную ключем яндекс.навигатора
    //@lat - широта
    //@lon - долгота
    getYandexnaviSignature(lat, lon) {
        const url = `${this.proxy}https://areg-p.flexcore.ru/admin/accessKeySignature/index.php?LAT=${lat}&LON=${lon}`;
        return this.http.get(url);
    }
    SW() {
        return __awaiter(this, void 0, void 0, function* () {
            const registration = yield navigator.serviceWorker.ready;
            try {
                yield registration.sync.register('syncer').then(() => {
                    console.log();
                });
            }
            catch (_a) {
                console.log('Periodic Sync could not be registered!');
            }
        });
    }
};
SysService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient,
        Device,
        ToastController])
], SysService);
export { SysService };
//# sourceMappingURL=sys.service.js.map