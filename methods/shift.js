export function shift() {

    const firstElement = this.data[0]

    for (let i = 0; i < this.length; i++){
        this.data[i] = this.data[i + 1];
    }
    
    delete this.data[this.length - 1]
    this.length--
    return firstElement
}