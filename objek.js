    const karakter = {
    nama: "Barra",
    level: 100,
    hp: 1000,
    senjata: "Pedang Besi"
};

console.log(karakter.nama);    //dot 
console.log(karakter["hp"]);  //bracket notation

karakter.hp = 800;            //mengubah nilai properti
karakter.level = 101;         
karakter.armor = "Baju Besi";  //menambah properti baru


console.log(karakter);