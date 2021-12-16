import superagent from "superagent";

const requestData = {
    url: '',
    payload: '',
    headers: '',
    isFormData: false,
}

class HttpRequest {

    async doBaseRequest(method, requestData) {
        const request = async () => this.createRequest(method, requestData);
        let response = await request();

        // if (response.statusCode < 400) {
        //     console.log(`${method} request response status code: "${response.statusCode}"`);
        //     return response.body;
        // }
        return {
            body: response.body,
            status: response.statusCode
        }
    }

    async createRequest(method, requestData) {
        let request;
        switch (method) {
            case "get":
                request = superagent.get(requestData.url);
                break;
            case "post":
                request = superagent.post(requestData.url)
                    .send(requestData.body)
                    .type('json')
                break;
            case "put":
                request = superagent.put(requestData.url);
                break;
            case "delete":
                request = superagent.delete(requestData.url);
                break;
        }
        // if (requestData.payload !== undefined) {
        //     (typeof requestData.payload === 'string')
        //         ? request = request.send(JSON.parse(requestData.payload))
        //         : request = request.send(requestData.payload);
        // }
        // if (requestData.headers !== undefined) {
        //     request = request.set(requestData.headers);
        // }
        return request.ok((status) => true);
    }

    async doPostRequest(requestData) {
        console.log('***** requestData POST ****', requestData)
        // return this.doBaseRequest('post', requestData);
        return await superagent.post(requestData.url).send(requestData.body).type('json');
    }

    async doGetRequest(requestData) {
        return await superagent.get(requestData.url);
    }

    async doPutRequest(requestData) {
        let request = await superagent.put(requestData.url).send(requestData.body).type('json')
        return request.ok((status) => true)
    }

    async doDeleteRequest(requestData) {
        let request = await superagent.delete(requestData.url);
        return request.ok((status) => true)
    }

    // async createUserPost(url, body){
    //   return  await this.createRequest('post', url,body)
    // }

    async getToken() {
        return global.token = await browser.execute((key) => {
            return browser.localStorage.getItem(key)
        }, 'token')
    }

}

export const requestSender = new HttpRequest();
