// Connect Server
function fetchData() {
    fetch('http://localhost:4000/api/user')
        .then(response => response.json())
        .then(({ gangster2025 }) => {
            console.log("Gangster 2025:");
            console.log(gangster2025);
        })
        .catch(error => console.error('Error:', error));
}

// Panggil fungsi fetchData saat halaman dimuat
window.onload = fetchData;

// Buat Variabel dari hasil connect database
var data_gangster_2025 = {
"type": "FeatureCollection",
"name": "Data-gangster-2025",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{"type":"Feature","properties":{"Lat":432765.69,"Long":9225802.75,"Nama":"All Star Manyaran","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.391281362737416,-7.003662116147308]}},
{"type":"Feature","properties":{"Lat":441916.09,"Long":9219687.78,"Nama":"All Star Kp.Batik","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.474061478952464,-7.059075428800589]}},
{"type":"Feature","properties":{"Lat":436100.93,"Long":9230865.99,"Nama":"Anjay 165","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.421532767599047,-6.957900653683317]}},
{"type":"Feature","properties":{"Lat":438684.33,"Long":9227696.22,"Nama":"Asik Medoho","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.444885329908601,-6.986600963248415]}},
{"type":"Feature","properties":{"Lat":431870.77,"Long":9227761.84,"Nama":"Bonber 195 (Bonharjo Bersatu)","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.383202604252546,-6.985930730777567]}},
{"type":"Feature","properties":{"Lat":436703.43,"Long":9230521.75,"Nama":"Boncil 195","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.426983132961382,-6.961021119398704]}},
{"type":"Feature","properties":{"Lat":441623.23,"Long":9219997.25,"Nama":"Bradil (Brandalan Dinar Liar)","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.471412941588753,-7.056273104991294]}},
{"type":"Feature","properties":{"Lat":440055.35,"Long":9227784.11,"Nama":"2 Kampung","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.457298241838487,-6.985820401163969]}},
{"type":"Feature","properties":{"Lat":438403.84,"Long":9227343.93,"Nama":"Cilik Tapi Sangar (CTS) 246","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.442342249495141,-6.989784618736345]}},
{"type":"Feature","properties":{"Lat":435150.85,"Long":9219518.83,"Nama":"Enjoy Belanda","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.412803694907367,-7.060530605076694]}},
{"type":"Feature","properties":{"Lat":436993.62,"Long":9231513.53,"Nama":"Gangster 69 / kingkongku 69","Anggota":30.0},"geometry":{"type":"Point","coordinates":[110.429620927659229,-6.95205311817707]}},
{"type":"Feature","properties":{"Lat":435872.39,"Long":9225744.78,"Nama":"Gangster army 059","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.419406807513639,-7.004222047545872]}},
{"type":"Feature","properties":{"Lat":436592.73,"Long":9224450.39,"Nama":"Gangster Candi","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.42591400683132,-7.015938463362622]}},
{"type":"Feature","properties":{"Lat":440721.71,"Long":9227576.91,"Nama":"Gangster Simponi Orang Stress","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.463328734340692,-6.987701548771361]}},
{"type":"Feature","properties":{"Lat":435669.71,"Long":9223070.43,"Nama":"Gangster Slow","Anggota":17.0},"geometry":{"type":"Point","coordinates":[110.417541797905713,-7.028410578523561]}},
{"type":"Feature","properties":{"Lat":436943.83,"Long":9226091.22,"Nama":"Mecil","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.429110800860656,-7.001100196753445]}},
{"type":"Feature","properties":{"Lat":438040.16,"Long":9228284.90,"Nama":"MR.Bean","Anggota":25.0},"geometry":{"type":"Point","coordinates":[110.439059941354813,-6.98126913496313]}},
{"type":"Feature","properties":{"Lat":438846.51,"Long":9230391.03,"Nama":"Notgenk","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.446382186518719,-6.962226653544987]}},
{"type":"Feature","properties":{"Lat":440326.38,"Long":9218760.56,"Nama":"Official 102","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.459657657694606,-7.067446185973346]}},
{"type":"Feature","properties":{"Lat":438044.49,"Long":9230816.98,"Nama":"Official019","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.439126371138599,-6.958365151403039]}},
{"type":"Feature","properties":{"Lat":443249.17,"Long":9227168.18,"Nama":"Official Bangetayu","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.486206213275238,-6.991424255225787]}},
{"type":"Feature","properties":{"Lat":439989.99,"Long":9222513.14,"Nama":"Official_rp02Sambiroto","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.456651304441863,-7.033498549415378]}},
{"type":"Feature","properties":{"Lat":436135.82,"Long":9227786.28,"Nama":"Pandaganks.111","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.421814459800686,-6.985758592218962]}},
{"type":"Feature","properties":{"Lat":441904.13,"Long":9224560.17,"Nama":"Petir (Pedurungan Timur)","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.474002806591884,-7.015001779198346]}},
{"type":"Feature","properties":{"Lat":439338.02,"Long":9222034.78,"Nama":"Gangster Portal (portal2)","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.450743269805045,-7.037818684677438]}},
{"type":"Feature","properties":{"Lat":435131.16,"Long":9229413.29,"Nama":"Punokawan","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.412737574832505,-6.971030240750258]}},
{"type":"Feature","properties":{"Lat":431010.48,"Long":9226157.06,"Nama":"Remaja021Kepyak","Anggota":20.0},"geometry":{"type":"Point","coordinates":[110.37539513231745,-7.000436396122914]}},
{"type":"Feature","properties":{"Lat":435506.96,"Long":9226974.42,"Nama":"Selatan Stress","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.416112248256837,-6.993095252292828]}},
{"type":"Feature","properties":{"Lat":435463.57,"Long":9219019.96,"Nama":"Sukun Stress","Anggota":15.0},"geometry":{"type":"Point","coordinates":[110.415629547671131,-7.065046671951551]}}

    ]
    }