export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,

    specs: [
        './test/specs/**/*.ts'
    ],
 
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
 
    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'emulator-5554', // ID пристрою
        'appium:platformVersion': '12.0',    // Версія Android
        'appium:automationName': 'UiAutomator2'
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
