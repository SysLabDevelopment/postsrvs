ionic cordova build android --release --prod
cd platforms/android/app/build/outputs/apk/release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore postsrvs.keystore app-release-unsigned.apk postsrvs
~/Library/Android/sdk/build-tools/29.0.2/zipalign -v 4 app-release-unsigned.apk postsrvs.apk

// passphrase
// vardeb*#*