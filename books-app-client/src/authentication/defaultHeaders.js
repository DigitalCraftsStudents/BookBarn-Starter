
let defaultHeaders = {}

export function setDefaultHeaders(token) {

    if (token == null) {
        if (defaultHeaders.headers) {
            delete defaultHeaders.headers['Authorization']
        }
    } else {
        defaultHeaders = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
}

export function getDefaultHeaders() {
    return defaultHeaders
}


