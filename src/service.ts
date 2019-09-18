export default {
    func1: data => {
        const body = JSON.parse(data.body);
        return 'message from 1 func'
    },
    func2: data => {
        var id = data.queryStringParameters.id;
        return 'message from 2 func'
    }
}