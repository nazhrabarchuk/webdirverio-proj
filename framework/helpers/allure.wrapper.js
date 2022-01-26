function addAllureDescription (description, type = 'text') {
  allure.addDescription(description, type)
}

function addAllureAttachment (name, content, type) {
  allure.addAttachment(name, content, type)
}

function addAllureStep (title) {
  allure.addStep(title)
}

export {
  addAllureDescription,
  addAllureAttachment,
  addAllureStep
}
