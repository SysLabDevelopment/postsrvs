const fs = require('fs');

module.exports = (ctx) => {

    if (ctx.build && ctx.build.configuration && ctx.build.configuration === "production") {

        console.log("production build: performing version bump...");

        // update package.json:
        let packageJSON = JSON.parse(fs.readFileSync('package.json', 'utf-8').toString());
        let versionArray = packageJSON.version.split(".");
        let versionCode = packageJSON.versionCode;
        versionArray[2] = (parseInt(versionArray[2]) + 1).toString();
        versionCode = (parseInt(versionCode) + 1).toString();
        packageJSON.version = versionArray.join(".");
        packageJSON.versionCode = versionCode;
        console.warn(`sys:: versionCode is ${packageJSON.versionCode}`);
        console.warn(`sys:: app version is ${packageJSON.version}`);
        fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, "\t"), 'utf-8');
        console.log("package.json app version updated");

        let prodEnvData = fs.readFileSync(`src/environments/environment.prod.ts`, 'utf-8');
        prodEnvData = prodEnvData.replace(/CURRENT_VERSION: ".*"/, `CURRENT_VERSION: "${packageJSON.version}"`);
        fs.writeFileSync('src/environments/environment.prod.ts', prodEnvData, 'utf-8');
        console.log("environments.prod.ts app version updated");

        // let devEnvData = fs.readFileSync(`src/environments/environment.dev.ts`, 'utf-8');
        // devEnvData = devEnvData.replace(/CURRENT_VERSION: ".*"/, `CURRENT_VERSION: "${packageJSON.version}"`);
        // fs.writeFileSync('src/environments/environment.dev.ts', devEnvData, 'utf-8');
        // console.log("environments.dev.ts app version updated");

        // let localEnvData = fs.readFileSync(`src/environments/environment.local.ts`, 'utf-8');
        // localEnvData = localEnvData.replace(/CURRENT_VERSION: ".*"/, `CURRENT_VERSION: "${packageJSON.version}"`);
        // fs.writeFileSync('src/environments/environment.local.ts', localEnvData, 'utf-8');
        // console.log("environments.local.ts app version updated");

        // let defaultEnvData = fs.readFileSync(`src/environments/environment.ts`, 'utf-8');
        // defaultEnvData = defaultEnvData.replace(/CURRENT_VERSION: ".*"/, `CURRENT_VERSION: "${packageJSON.version}"`);
        // fs.writeFileSync('src/environments/environment.ts', defaultEnvData, 'utf-8');
        // console.log("environments.ts app version updated");

        let configXmlData = fs.readFileSync('config.xml', 'utf-8');
        configXmlData = configXmlData.replace(/id="postsrvs.i" version=".*" xmlns=/, `id="postsrvs.i" version="${packageJSON.version}" xmlns=`);

        configXmlData = configXmlData.replace(/android-versionCode=".*" id/, `android-versionCode="${packageJSON.versionCode}" id`);

        fs.writeFileSync('config.xml', configXmlData,'utf-8');
        console.log("config.xml app version updated");
        // let file = new URL('file:platforms/android/app/build/outputs/apk/release/postsrvs.apk')
        // fs.rmdirSync(file);
    };

};