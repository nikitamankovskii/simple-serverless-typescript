
export const handler = {
    reutrnSuccess: data => ({
        statusCode: 200,
        body: JSON.stringify(data)
    })
}

export default {
    handler: handler,
    events: {},
    db: {}
}