declare global {
    interface String {
        bool(): boolean
    }
}

String.prototype.bool = function (): boolean {
    return /^true|yes|on|1$/.test(this.trim().toLowerCase())
}

export { }