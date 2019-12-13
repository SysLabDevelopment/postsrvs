cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/call-number/www/CallNumber.js",
        "id": "call-number.CallNumber",
        "pluginId": "call-number",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
        "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
        "pluginId": "com-darryncampbell-cordova-plugin-intent",
        "clobbers": [
            "intentShim"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/BackgroundGeolocation.js",
        "id": "cordova-plugin-mauron85-background-geolocation.BackgroundGeolocation",
        "pluginId": "cordova-plugin-mauron85-background-geolocation",
        "clobbers": [
            "BackgroundGeolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/radio.js",
        "id": "cordova-plugin-mauron85-background-geolocation.radio",
        "pluginId": "cordova-plugin-mauron85-background-geolocation"
    },
    {
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
        "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
        "pluginId": "cordova-plugin-uniquedeviceid",
        "merges": [
            "window.plugins.uniqueDeviceID"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "call-number": "0.0.2",
    "com-darryncampbell-cordova-plugin-intent": "1.1.7",
    "cordova-plugin-android-permissions": "1.0.0",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-fullscreen": "1.1.0",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-inappbrowser": "3.0.0",
    "cordova-plugin-ionic-keyboard": "2.1.3",
    "cordova-plugin-ionic-webview": "4.1.0",
    "cordova-plugin-mauron85-background-geolocation": "3.0.1",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-uniquedeviceid": "1.3.2",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova.plugins.diagnostic": "5.0.0",
    "es6-promise-plugin": "4.2.2",
    "phonegap-plugin-barcodescanner": "8.0.1"
}
// BOTTOM OF METADATA
});