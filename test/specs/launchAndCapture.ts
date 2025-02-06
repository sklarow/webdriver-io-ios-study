import { expect } from 'chai'

describe('Launch About Me App', () => {
    it('should open the app and take a screenshot', async () => {
        // Pause to allow the app to load
        await driver.pause(5000);

        // Capture and save the screenshot
        await driver.saveScreenshot('./screenshots/appLaunch.png');

        // Verify that the screenshot file exists
        const fs = require('fs');
        const fileExists = fs.existsSync('./screenshots/appLaunch.png');
        expect(fileExists).to.be.true;
    });
});
