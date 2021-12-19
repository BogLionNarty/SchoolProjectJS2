class Magazyn extends ListaTowarow{
    constructor(){
        super();
    }
    ilosciProduktow = new Map();
    dodajProdukt(produkt, ilosc = 1){
        if (this.ilosciProduktow.has(produkt.id)) {
            this.ilosciProduktow.set(produkt.id, (this.ilosciProduktow.get(produkt.id)) + ilosc);
        }
        else{
            if (super.dodajProdukt(produkt) == true)
                this.ilosciProduktow.set(produkt.id, ilosc);
        }
    }
    generujId(){
        let _id = 0;
        while (true) {
            if (this.ilosciProduktow.has(_id)){
                _id++;
            }
            else
                break;
        }
        return _id;
    }
    istnieje(nazwa, model, cena, zuzycieEnergii){
        let _id = false;
        this.list.forEach(element => {
            if (element.nazwa == nazwa && element.model == model && element.cena == cena && element.zuzycieEnergii == zuzycieEnergii){
                _id = element.id;
            }
        });
        return _id;
    }
    zabierzProdukt(idProduktu){
        if (this.ilosciProduktow.has(idProduktu)) {
            if (this.ilosciProduktow.get(idProduktu) > 0) {
                this.ilosciProduktow.set(idProduktu, (this.ilosciProduktow.get(idProduktu))-1);
                let _produkt = false;
                this.list.forEach(element => {
                    if (element.id == idProduktu){
                        _produkt = element;
                    }
                });
                return _produkt;
            }
            else{
                console.log("Zabrakło produktu o id " + idProduktu);
                return false;
            }
        }
        console.log("Brak produktu o podanym id");
        return false;
    }
}