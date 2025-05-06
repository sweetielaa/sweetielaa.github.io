//--Posisi Peta --
var map = L.map('map').setView([-6.992, 110.418], 11);

//--Dialog Before Using Apps --
var popup = document.getElementById("popup");

function showPopup() {
  popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function hidePopup() {
  popup.style.display = "none";
}

// Tambahkan event listener untuk menampilkan pop-up saat peta dimuat
map.on('load', showPopup);

// Tambahkan event listener untuk menyembunyikan pop-up saat pengguna mengklik di luar pop-up
document.addEventListener("click", function(event) {
  if (event.target.closest("#popup") === null) {
    hidePopup();
  }
});

// Fungsi untuk mengatur posisi pop-up saat jendela browser diubah ukurannya
function adjustPopupPosition() {
  var popupWidth = popup.offsetWidth;
  var popupHeight = popup.offsetHeight;
  popup.style.marginLeft = "-" + (popupWidth / 14) + "px";
  popup.style.marginTop = "-" + (popupHeight / 6) + "px";
}

// Panggil fungsi untuk mengatur posisi pop-up saat halaman dimuat dan saat ukuran jendela berubah
window.addEventListener("load", function() {
  adjustPopupPosition();
  showPopup();
});
window.addEventListener("resize", adjustPopupPosition);

//--Lokasi--
L.control.locate().addTo(map);

//--Skala--
L.control.betterscale().addTo(map);

//--Geocoder--
var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
  })
    .on('markgeocode', function(e) {
      var bbox = e.geocode.bbox;
      var poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
      ]).addTo(map);
      map.fitBounds(poly.getBounds());
    })
    .addTo(map);

//--Add GeoJSON--
// Data Kejadian Tahun 2025
var crashIcon = L.icon({
    iconUrl: './Assets/img/crash-marker.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Membuat fungsi untuk menentukan marker (Kejadian Tahun 2025)
function pointToLayerkejadian2025(feature, latlng) {
    var prop = feature.properties;
    
    var popupContent = "<b>Lokasi Kejadian:</b> " + prop.Lokasi_Kej + "<br>" +
                       "<b>Tanggal:</b> " + prop.Tanggal + "<br>" +
                       "<b>Jam:</b> " + prop.Jam + "<br>" +
                       "<b>Tempo:</b> " + prop.Tempo + "<br>" +
                       "<b>Kategori:</b> " + prop.Kategori + "<br>" +
                       "<b>Koordinat:</b> " + prop.Lat + ", " + prop.Long;
    
    return L.marker(latlng, { icon: crashIcon }).bindPopup(popupContent);
}

// Memuat GeoJSON ke peta (Kejadian Tahun 2025)
L.geoJSON(data_kejadian_2025, {
    pointToLayer: pointToLayerkejadian2025,
});


// Data Gangster Tahun 2025
var crashIcon = L.icon({
    iconUrl: './Assets/img/crash-marker.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Membuat fungsi untuk menentukan marker (Gangster tahun 2025)
function pointToLayerganster2025(feature, latlng) {
    var prop = feature.properties;
    
    var popupContent = "<b>Nama :</b> " + prop.Nama + "<br>" +
                       "<b>Anggota:</b> " + prop.Anggota + "<br>" +
                       "<b>Koordinat:</b> " + prop.Lat + ", " + prop.Long;
    
    return L.marker(latlng, { icon: crashIcon }).bindPopup(popupContent);
}

// Memuat GeoJSON ke peta (Gangster tahun 2025)
L.geoJSON(data_gangster_2025, {
    pointToLayer: pointToLayerganster2025,
});


// Data Area Rawan Kecelakaan Tinggi
// Membuat fungsi pop-up Area Rawan Kecelakaan
function pointToLayerRawan(feature, latlng) {
    var prop = feature.properties;
    
    var popupContent = "<b>Kode Jalan:</b> " + prop.code + "<br>" +
                       "<b>Nama Jalan :</b> " + prop.name + "<br>" +
                       "<b>Klasifikasi :</b> " + prop.fclass + "<br>" +
                       "<b>Geometry :</b> " + prop.geometry;
    
    return L.marker(latlng).bindPopup(popupContent);
}

// Memuat GeoJSON ke peta
L.geoJSON(area_rawan_tinggi, {
    pointToLayer: pointToLayerRawan,
    style: function(feature) {
        return {
            fillColor: 'red',
            color: 'red',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5
        };
    }
}).addTo(map);

// Membuat fungsi pop-up Area Kota Semarang
function pointToLayerarea(feature, latlng) {
    var prop = feature.properties;
    
    var popupContent = "<b>Nama Kecamatan:</b> " + prop.NAME_3 + "<br>" +
                       "<b>Geometry :</b> " + prop.geometry;
    
    return L.marker(latlng).bindPopup(popupContent);
}

// Memuat GeoJSON ke peta
L.geoJSON(area_semarang, {
    pointToLayer: pointToLayerarea,
});

// Buat layer-group untuk masing-masing tahun kejadian kecelakaan
var kejadian2025Layer = L.geoJSON(data_kejadian_2025, {
    pointToLayer: pointToLayerkejadian2025,
});

var gangster2025Layer = L.geoJSON(data_gangster_2025, {
    pointToLayer: pointToLayerganster2025,
});


var area_rawan = L.geoJSON(area_rawan_tinggi, {
    pointToLayer: pointToLayerRawan
}).addTo(map);

var area_kota_semarang = L.geoJSON(area_semarang, {
    pointToLayer: pointToLayerarea
});

//--BaseMaps--
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
subdomains: ['a','b','c']
}).addTo(map);
     
var World_Imagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: '&copy; <a href="https://www.esri.com/en-us/home">Esri</a>',
subdomains: ['a','b','c']
});

//--Layer Control--
var overlayLayers = {
    "Wilayah Penelitian": area_kota_semarang,
    "Data Titik Kejadian 2020-2025": kejadian2025Layer,
    "Data Gangster 2025": gangster2025Layer,
    "Area Rawan Kecelakaan": area_rawan
};

var baseMaps = {
"World_Imagery": World_Imagery,
"OpenStreetMap": osm, 
};

var layerControl = L.control.layers(baseMaps, overlayLayers).addTo(map);
layerControl.setPosition('topright');

//--Legenda--
const legend = L.control.Legend({
    position: "topright",
    title: "LEGENDA",
    symbolWidth: 24,
    symbolHeight: 15,
    opacity: 1.0,
    column: 1,
    collapsed: true,
    legends: [ 
        {
            label: "Wilayah penelitian",
            type: "image",
            url: "./Assets/img/area-blue.png",
        },{
            label: "Titik Kejadian tahun 2025",
            type: "image",
            url: "./Assets/img/crash-marker-blue.png",
        },{
            label: "Kejadian gangster tahun 2025",
            type: "image",
            url: "./Assets/img/crash-marker.png",
        },{
            label: "Area Rawan Kecelakaan",
            type: "image",
            url: "./Assets/img/area-rawan.png",
        }
    ]
}).addTo(map);

//--Algoritma Routing--
// Inisialisasi Routing control
const control = L.Routing.control({
    router: L.Routing.mapbox('pk.eyJ1IjoiYW1oYWRpZCIsImEiOiJjbHZ0ZGdwMHYwdHdtMmxueXEyYTVwejJlIn0.zaYm3Q4PwQ9IA6c0w76Yew'),
    geocoder: L.Control.Geocoder.nominatim(),
    routeWhileDragging: true,
}).addTo(map);

// Tambahkan event listener pada peta untuk menangkap klik pengguna
map.on('click', function(event) {
    const destinationLatLng = event.latlng;

    // Buat elemen HTML untuk pop-up
    const popupContent = `
        <div>
            <p>Apakah Anda yakin ingin pergi ke lokasi ini?</p>
            <button id="confirmButton">Ya</button>
            <button id="cancelButton">Tidak</button>
        </div>
    `;

    // Tampilkan pop-up di lokasi yang diklik
    const popup = L.popup()
        .setLatLng(destinationLatLng)
        .setContent(popupContent)
        .openOn(map);

    // Tambahkan event listener untuk tombol konfirmasi
    document.getElementById('confirmButton').addEventListener('click', function() {
        // Tutup pop-up
        map.closePopup(popup);

        // Dapatkan lokasi pengguna saat ini menggunakan geolocation (jika tersedia)
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Setel titik awal dan titik akhir pada kontrol rute
            control.setWaypoints([userLatLng, destinationLatLng]);

            // Lakukan perutean
            control.route();
        }, function(error) {
            console.error('Tidak dapat mengakses lokasi pengguna:', error);
        });
    });

    // Tambahkan event listener untuk tombol batal
    document.getElementById('cancelButton').addEventListener('click', function() {
        // Tutup pop-up
        map.closePopup(popup);
    });
});

//--Algoritma Geofence--
// Tentukan fungsi untuk memeriksa lokasi pengguna
function checkLocation() {
    map.locate({setView: true});
}

// Tentukan fungsi untuk menangani lokasi yang ditemukan
function onLocationFound(e) {
    var userLocation = e.latlng;

    // Periksa apakah lokasi pengguna berada dalam area rawan kecelakaan
    var userWithinArea = false;
    area_rawan.eachLayer(function(layer) {
        if (layer.getBounds().contains(userLocation)) {
            userWithinArea = true;
        }
    });

    // Periksa apakah browser mendukung notifikasi
    if (!("Notification" in window)) {
        console.error("Browser ini tidak mendukung notifikasi desktop");
    } else {
        // Jika pengguna berada dalam area rawan kecelakaan, tampilkan notifikasi dan pop-up
        if (userWithinArea && Notification.permission === "granted") {
            showNotification("Saat ini anda sedang berada dalam Area Rawan Kecelakaan");
            showPopup("Saat ini anda sedang berada dalam Area Rawan Kecelakaan");
        } else if (userWithinArea && Notification.permission !== "denied") {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    showNotification("Saat ini anda sedang berada dalam Area Rawan Kecelakaan");
                    showPopup("Saat ini anda sedang berada dalam Area Rawan Kecelakaan");
                }
            });
        }
    }
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    // Periksa apakah Service Worker telah terdaftar dan aktif
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        // Kirim pesan ke Service Worker untuk menampilkan notifikasi
        navigator.serviceWorker.controller.postMessage({
            type: 'show_notification',
            message: message
        });
    } else {
        // Service Worker belum terdaftar atau aktif, tampilkan notifikasi langsung
        new Notification('HATI-HATI !!!!', {
            body: message,
            icon: './Assets/img/traffic-accident.png'
        });
    }
}

// Fungsi untuk menampilkan pop-up
function showPopup(message) {
    // Buat elemen pop-up
    var popup = document.createElement('div');
    popup.className = 'popup-notification';
    popup.innerText = message;
    
    // Gaya dasar untuk pop-up
    popup.style.position = 'fixed';
    popup.style.bottom = '25px';
    popup.style.right = '10px';
    popup.style.padding = '5px';
    popup.style.backgroundColor = '#101820';
    popup.style.color = 'white';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1000';
    
    // Tambahkan elemen pop-up ke dalam body
    document.body.appendChild(popup);

    // Hapus pop-up setelah 5 detik
    setTimeout(function() {
        document.body.removeChild(popup);
    }, 5000);
}

// Dengarkan acara lokasi ditemukan
map.on('locationfound', onLocationFound);

// Daftarkan Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/service_worker.js')
    .then(function(registration) {
        console.log('Service Worker registered successfully:', registration);
    })
    .catch(function(error) {
        console.error('Service Worker registration failed:', error);
    });
}

// Panggil fungsi checkLocation sekali untuk memulai
checkLocation();

//--Kontak Menu--
// Fungsi untuk mendapatkan lebar responsif berdasarkan ukuran layar
function getResponsiveWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) { // Mobile devices
        return "45%";
    } else if (screenWidth <= 768) { // Tablets
        return "35%";
    } else { // Laptop/PC
        return "15%";
    }
}

// Fungsi untuk mengatur ulang lebar slideMenu
function updateSlideMenuWidth(slideMenu) {
    const newWidth = getResponsiveWidth();
    slideMenu._container.style.width = newWidth;
}


const slideMenu = L.control.slideMenu("", {
    position: "topleft",
    menuposition: "bottomleft",
    width: getResponsiveWidth(),
    height: "150px",
    icon: "fa fa-phone",
    delay: "50",
}).addTo(map);

slideMenu.setContents(left + contents);

//--ResetView--
L.control.resetView({
position: "topleft",
title: "Reset view",
latlng: L.latLng([-7.052, 110.439]),
zoom: 13,
}).addTo(map);
// Mengupdate lebar slideMenu saat jendela diubah ukurannya
window.addEventListener('resize', () => {
    updateSlideMenuWidth(slideMenu);
});
