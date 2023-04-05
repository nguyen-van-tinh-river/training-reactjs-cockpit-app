import "../extensions/string"
import { isEmpty } from "../utils/function-util"

const { DEBUG } = process.env

export const http = {
    on: true,

    fall: function () {
        this.on = false
        return this
    },

    get: function (url: string, query: any = {}) {
        return this.fetch(url, { method: 'GET', query })
    },

    post: function (url: string, body: any) {
        return this.fetch(url, { method: 'POST', body })
    },

    put: function (url: string, body: any) {
        return this.fetch(url, { method: 'PUT', body })
    },

    delete: function (url: string) {
        return this.fetch(url, { method: 'DELETE' })
    },

    fetch: function (url: string, options?: any) {
        let { body, query } = options

        if (
            body &&
            !(
                typeof FormData !== 'undefined' &&
                body instanceof FormData
            )
        ) {
            options = {
                ...options,
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            }
        }

        if (!isEmpty(query)) {
            url += '?' + new URLSearchParams(query).toString()
        }

        this.info(`fetch(${url})`)
        this.info(JSON.stringify(options))

        return fetch(url, options)
            .then(this.handle)
            .catch(error => {
                if (!(DEBUG || '').bool()) {
                    this.error(`fetch(${url})`)
                    this.error(JSON.stringify(options))
                }
                this.error(error)
                return Promise.resolve(http.end({ data: {}, errors: { message: '500 Internal Server Error' } }))
            })
            .finally(() => {
                http.on = true
            })
    },

    handle: function (response: any) {
        if (!response?.ok) {
            const contentType = response.headers.get('content-type')

            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json().then((data: any) => http.end({ data: {}, errors: data }))
            }

            return Promise.resolve(http.end({ data: {}, errors: { message: '500 Internal Server Error' } }))
        }

        return response.json().then((data: any) => http.end({ data, errors: null }))
    },

    end: function ({ data, errors }: any) {
        let result = this.on ?
            { data, errors } :
            { ...(data || {}), errors: (errors || {}) }

        this.info(JSON.stringify(result))
        return result
    },

    error: function (message: string) {
        console.log(message);
    },

    info: function (message: string) {
        if (!(DEBUG || '').bool()) { return }
        console.log(message);
    }
}
