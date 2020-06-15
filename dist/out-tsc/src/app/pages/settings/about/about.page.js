import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
let AboutPage = class AboutPage {
    constructor(route, appVersion) {
        this.route = route;
        this.appVersion = appVersion;
    }
    ngOnInit() {
        this.params = this.route.snapshot.params;
        this.app.name = this.appVersion.getAppName();
        this.app.packageName = this.appVersion.getPackageName();
        this.app.versionCode = this.appVersion.getVersionCode();
        this.app.versionNumber = this.appVersion.getVersionNumber();
    }
};
AboutPage = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.page.html',
        styleUrls: ['./about.page.css'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        AppVersion])
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.page.js.map