

function addAllureDescription(description, type = 'text') {
    allure.addDescription(description, type);
}

function addAllureAttachment(name, content, type) {
    allure.addAttachment(name, content, type);
}

export {
    addAllureDescription,
    addAllureAttachment
};
