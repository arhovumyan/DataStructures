export function remove(index) {
    for (let i = index; i < this.length -1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length--;
    return this.data;
}