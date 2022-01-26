import Button from '../../../../framework/elements/controls/button.control.js'
import * as waits from '../../../../framework/helpers/waits.js'

export default class BasketDeliveryComponent {
  get standardDeliveryButton () {
    return new Button($('.mat-row.cdk-row:last-child'), 'Standard delivery button')
  }

  get continueButton () {
    return new Button($('button[aria-label="Proceed to delivery method selection"]'),
      'Proceed to delivery method selection button')
  }

  async clickStandardDeliveryButton () {
    await this.standardDeliveryButton.click()
  }

  async clickContinueButton () {
    await this.continueButton.click()
  }

  async waitForPageAvailable () {
    await waits.waitForDisplayed(await this.standardDeliveryButton)
    return this
  }

  async chooseDelivery () {
    allure.addStep('Choose delivery item')
    await this.clickStandardDeliveryButton()
    await this.clickContinueButton()
  }
}
