import moment from 'moment';

export function isEmpty(data: any) {
    switch (typeof (data)) {
        case 'object': return (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]' || !data)
        case 'string': return !data.trim()
        case 'undefined': return true
        default: return false
    }
}
export const isNumeric = (value: string): boolean => !new RegExp(/[^\d]/g).test(value.trim())

export const dateFormat = (date: any, format: string, type: any = 'long') => {
    if (isEmpty(date)) return 'ー'
    date = moment(date)

    let data: any = { 'yyyy': date.format('YYYY') }
    new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { era: type, year: 'numeric', month: 'numeric', day: 'numeric' })
        .formatToParts(date.toDate())
        .forEach((p: any) => data[p.type] = p.value)

    return replace(format, data)
}

export const numberFormat = (value: any, digits: number = 0) => {
    if (value <= 0) return 'ー'
    return Number(value).toLocaleString('en-US', { maximumFractionDigits: digits })
}

export const replace = (text: string, data: any) => {
    return text.replace(/\{(\w+)\}/g, (match, contents) => {
        return data[contents] || ''
    })
}