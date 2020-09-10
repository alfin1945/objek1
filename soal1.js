function binatang(nama, usia, sikap, warna, makanan) {
    var hewan = {}
    hewan.nama = nama,
        hewan.usia = usia,
        hewan.sikap = sikap,
        hewan.warna = warna,
        hewan.makanan = makanan
    return hewan
}

console.log(binatang('gajah', 25, 'tergantung', 'abu-abu', 'omnivora'))