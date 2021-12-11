import superagent from "superagent";

class HttpRequest{
     async doBaseRequest(method, requestData){
        const request = async () => this.createRequest(method, requestData);
        let response;
        try {
            response = await request();
        } catch {
            throw new Error(`${method} request to "${requestData.url}" was failed`);
        }
    }

    async createRequest(method, requestData){
        let request;
        switch (method) {
            case "get":
                request = superagent.get(requestData.url);
                break;
            case "post":
                request = superagent.post(requestData.url);
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

}