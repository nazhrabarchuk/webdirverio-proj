import superagent from 'superagent'
import { expect } from 'chai'
import { clientData } from '../../../../../framework/helpers/client.js'
import * as allureWrapper from '../../../../../framework/helpers/allure.wrapper.js'

describe('Negative API: Basket remove items tests', () => {
  let token
  before(async () => {
    allureWrapper.addAllureDescription('Negative API: Basket remove items ')
    await clientData.register()
    token = await clientData.getAuthToken()
  })
  it('Negative API DELETE: return 404 when try to remove undefined item from basket', async () => {
    const response = await superagent
      .delete(baseUrl + 'api/BasketItems/101')
      .set('Authorization', `Bearer ${token}`)
      .catch((e) => {
        console.log(e)
        return e
      })
    expect(response.status).to.equal(404)
  })
})
