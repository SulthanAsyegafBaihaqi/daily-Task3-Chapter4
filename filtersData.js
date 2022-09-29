const err = require('./errorHandler.js') 
const data1 = (datas)=>{
    const filtered = datas.filter(data =>{
        if(data.age < 30  && data.favoriteFruit == "banana")
            return data;
        })
    const jumlah = {
                    "jumlah": filtered.length,
                    "data" : filtered
                }
    return (!filtered.length)? err() : jumlah
}
const data2 = (datas)=>{
    const filtered = datas.filter(data => {
        if((data.gender == "female" || data.company == "FSW4") && data.age > 30)
            return data;
    })
    const jumlah = {
        "jumlah": filtered.length,
        "data" : filtered
    }
    return (!filtered.length)? err() : jumlah
}
const data3 = (datas)=>{
    const filtered = datas.filter(data => {
        if(data.eyeColor == "blue" &&(data.age >= 35 && data.age <= 40) && data.favoriteFruit == "apple")
            return data;})
            const jumlah = {
                "jumlah": filtered.length,
                "data" : filtered
            }
            return (!filtered.length)? err() : jumlah
}
const data4 = (datas)=>{
    const filtered = datas.filter(data => {
        if((data.company == "Intel" || data.company == "Pelangi")&& data.eyeColor == "green" )
            return data;})
            const jumlah = {
                "jumlah": filtered.length,
                "data" : filtered
            }
            return (!filtered.length)? err() : jumlah
}
const data5 = (datas)=>{
    const filtered = datas.filter(data => {
        const TglStr = data.registered
        const splTgl = TglStr.split("-")
        const tahun = parseInt(splTgl[0])
        if(tahun < 2016 && data.isActive == true)
            return data;})
        const jumlah = {
                "jumlah": filtered.length,
                "data" : filtered
        }
        return (!filtered.length)? err() : jumlah 
}

module.exports = { data1, data2, data3, data4, data5}