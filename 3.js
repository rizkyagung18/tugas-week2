const printSegitiga = (num) => {
    if (typeof num != 'number') {
        return "Data harus number"
    }

    let hasil = ""
    for (let i = num; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            hasil += j 
        }
        hasil += "\n"
    }
    return hasil
}

console.log(printSegitiga(5))
