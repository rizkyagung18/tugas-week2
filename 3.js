const printSegitiga = (num) => {
    if (typeof num != 'number') {
        return "Data harus number"
    }

    let hasil = ""
    let temp = 1
    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= i; j--) {
            hasil += temp;
            temp++ 
        }
        temp = 1
        hasil += "\n"
    }
    return hasil
}

console.log(printSegitiga(5))
