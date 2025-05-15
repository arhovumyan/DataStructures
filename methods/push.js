export function push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
}