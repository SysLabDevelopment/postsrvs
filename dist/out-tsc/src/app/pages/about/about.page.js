import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
let AboutPage = class AboutPage {
    constructor(appVersion) {
        this.appVersion = appVersion;
        this.app = {
            name: undefined,
            packageName: undefined,
            versionCode: undefined,
            versionNumber: undefined
        };
    }
    ngOnInit() {
        this.appVersion.getAppName().then(resp => this.app.name = resp);
        this.appVersion.getPackageName().then(resp => this.app.packageName = resp);
        this.appVersion.getVersionCode().then(resp => this.app.versionCode = resp);
        this.appVersion.getVersionNumber().then(resp => this.app.versionNumber = resp);
    }
};
AboutPage = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.page.html',
        styleUrls: ['./about.page.css'],
    }),
    __metadata("design:paramtypes", [AppVersion])
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.page.js.map