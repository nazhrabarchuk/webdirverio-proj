import superagent from 'superagent'

class HttpRequest {
  async doBaseRequest (method, requestData) {
    const request = async () => this.createRequest(method, requestData)
    const response = await request()
    return {
      body: response.body,
      status: response.statusCode
    }
  }

  async createRequest (method, requestData) {
    let request
    switch (method) {
      case 'get':
        request = superagent.get(requestData.url)
        break
      case 'post':
        request = superagent.post(requestData.url)
          .send(requestData.body)
          .type('json')
        break
      case 'put':
        request = superagent.put(requestData.url)
        break
      case 'delete':
        request = superagent.delete(requestData.url)
        break
    }
    return request.ok(() => true)
  }

  async doPostRequest (requestData) {
    console.log('***** requestData POST ****', requestData)
    return await superagent.post(requestData.url).send(requestData.body).type('json').catch((e) => {
      console.log(e)
      return e
    })
  }

  async doGetRequest (requestData) {
    return await superagent.get(requestData.url).catch((e) => {
      console.log(e)
      return e
    })
  }

  async doPutRequest (requestData) {
    return await superagent.put(requestData.url).send(requestData.body).type('json').catch((e) => {
      console.log(e)
      return e
    })
  }

  async doDeleteRequest (requestData) {
    return await superagent.delete(requestData.url).catch((e) => {
      console.log(e)
      return e
    })
  }
}

export const requestSender = new HttpRequest()
