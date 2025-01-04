# WebdriverIOAppiumAndroidStudio

## Summary

This repository contains automated tests for the WebdriverIO Android Demo App, configured to run on [Browserstack](https://www.browserstack.com) via GitHub Actions or a local Appium server.

## Requirements

- Node.js (v20 or later)

- Java - for local Appium server
- Android Studio - for setting up local emulator
- Appium with UiAutomator2 driver - for running tests locally
- Appium Doctor, Appium Inspector - not nessecary for running tests but recommended for validating Appium setup

## Steps to Install

1. Clone the repository or go to Code > Download ZIP
2. Install dependencies: ```npm install```
3. Appium: ```npm i --location=global appium```
```appium driver install uiautomator2```

## Running tests locally

```npm run test-local```

Make sure Android Studio is open and the Emulated Device is running.
Local tests are configured to run on the default Android Studio emulated device pre-installed with the latest version of the program.
The local configuration also uses the global Appium installation on your machine, make sure it is installed and configured properly.

## Tips

For a fresh Appium installation, it is recommended to use Appium Doctor to make sure it runs properly: 

Install: ```npm install appium-doctor -g```

Run: ```appium-doctor```

If there are any missing requirements, the program points them out (android, apkanalyzer.bat could NOT be found error can be ignored).

You can also use Appium Inspector to check if you can start a local sesion

Run Appium server manually: ```appium```

Capabilities for Appium Inspector: 
```
{
  "appium:deviceName": "emulator-5554",
  "appium:platformName": "Android",
  "appium:platformVersion": "15",
  "appium:automationName": "UiAutomator2",
  "appium:app": "path/to/apk/file",
  "appium:autoAcceptAlerts": "true",
  "appium:appWaitActivity": "*"
}
```
Additionally, the deviceName may vary on different Android Studio installations, if you need to check/replace it in the config, you can go to Extended Controls > Help > Emulator ADB Serial Number
