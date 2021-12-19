class Zamowienie{
    lista = new Map();
    dodajDoZamowienia(idProduktu, ilosc = 1){
        if (magazyn.ilosciProduktow.has(idProduktu)) {
            if (this.lista.has(idProduktu)) {
                this.lista.set(idProduktu, (this.lista.get(idProduktu)) + ilosc);
            }
            else{
                this.lista.set(idProduktu, ilosc);
            }
        }
        else{
            console.log("Produkt o takim id nie istnieje");
        }
    }
    zrealizujZamowienie(){
        this.lista.forEach(function callbackFn(value, key) {
            for (let index = 0; index < value; index++) {
                magazyn.zabierzProdukt(key);
            }
        });
    }
}