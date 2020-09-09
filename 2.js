const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 85
const ipa = 75

function nilaiUN(mtk, bahasaIndonesia, bahasaInggris, ipa) {
    if(arguments.length < 4) {
        return "Nilai nya kurang"
    }

    const rata2 = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
    console.log(rata2)

    let grade;
    if (rata2 <= 100 && rata2 >= 90) {
        grade = "A"
    } else if (rata2 < 90 && rata2 >= 80) {
        grade = "B"
    } else if (rata2 < 80 && rata2 >= 70) {
        grade = "C"
    } else if (rata2 < 70 && rata2 >= 60) {
        grade = "D"
    } else if(rata2 < 60 && rata2 >= 0) {
        grade = "E"
    } else {
        grade = "Nilai tidak valid"
    }
    return `Rata-rata = ${rata2} \n grade = ${grade}`
}

console.log(nilaiUN(mtk, bahasaIndonesia, bahasaInggris, ipa))