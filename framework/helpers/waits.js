const waitTime = {
    smallWait: 5000,
    mediumWait: 15000,
    longWait: 30000
};

async function waitFor(condition, options) {
    return browser.waitUntil(async () => {
        try {
            return condition();
        } catch (err) {
            return false;
        }
    }, options);
}

async function waitForDisplayed(
    element,
    ms = waitTime.mediumWait,
    errorMessage
) {
    const options = {
        timeout: ms,
        timeoutMsg: errorMessage ? errorMessage : `Element "${element.elementName}" is not displayed after ${ms} timeout`
    };
    await waitFor(async () => {
        return element.wdioElement.isDisplayed();
    }, options);
}


export {
    waitTime,
    waitFor,
    waitForDisplayed,
};
