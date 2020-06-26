import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LOCALE_ID } from '@angular/core';
platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [{ provide: LOCALE_ID, useValue: 'ru' }]
});
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map