module.exports = function reverse (n) {
    let tmp = Math.abs(n).toString().split('').reverse().join(``)
    return parseInt(tmp)
}
