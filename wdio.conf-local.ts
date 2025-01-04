import { join } from 'path';

export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "emulator-5554",
        "appium:platformVersion": "15",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), "./android.wdio.native.app.v1.0.8.apk"),
        "appium:autoAcceptAlerts": true,
        "appium:appWaitActivity": "*",
        "appium:noReset": false,
        "appium:fullReset": false,
    }],

    services: [
        ['appium', {
            command: 'appium',  // This tells WebdriverIO to use the globally installed Appium
            args: {
                relaxedSecurity: true,  // Example Appium server argument
            }
        }]
    ],
    port: 4723,  // Appium server port

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    reporters: ['spec'],

    onPrepare: () => {
        console.log('Preparing for mobile test execution...');
    },
};