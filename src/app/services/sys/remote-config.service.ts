import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from "@ionic/angular";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {
  remoteConfig: any = null;
  deviceInfo: Device;
  private configData: any;
  constructor(
    private platform: Platform,
    private firebase: FirebaseX,

  ) {
    this._init();
  }

  public getConfig() {
    return this.firebase.getInfo();
  }
  async isNewVersionAvailable() {
    if (this.remoteConfig) {
      const currentVersion = environment?.CURRENT_VERSION || '0.0.0';
      const remoteVersion = await this._fetchRemoteVersion() || '0.0.0';
      if (this._isVersionNewer(remoteVersion, currentVersion)) {
        return true;
      }

      return false;
    }
    return false;
  }
  private async _init() {
    this.remoteConfig = this.firebase.getInfo();
    this.configData = await this.firebase.getInfo();
  }
  private async _fetchRemoteVersion() {
    return new Promise<string>((resolve, reject) => {
      this.remoteConfig.fetchAndActivate().then(() => {
        this.remoteConfig.getString({ key: 'version', })
          .then((remoteVersion: any) => resolve(remoteVersion?.value))
          .catch((err: any) => reject(err));
      })
        .catch((err: any) => reject(err));
    });
  }
  /**
   * Returns true if remote version is newer than current version
   *
   * @param remoteVersion Version from remote config
   * @param currentVersion Current version
   */
  private _isVersionNewer(remoteVersion: string, currentVersion: string): boolean {
    const remoteVersionArr = remoteVersion.split('.');
    const currentVersionArr = currentVersion.split('.');
    for (let i = 0; i < remoteVersionArr.length; i++) {
      const r = Number(remoteVersionArr[i]) || 0;
      const c = Number(currentVersionArr[i]) || 0;
      if (r > c) {
        return true;
      }
      if (r < c) {
        return false;
      }
    }
    return false;
  }

  get config() {
    return this.configData
  }
}
