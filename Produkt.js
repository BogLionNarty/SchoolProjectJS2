class Produkt{
    constructor(id, nazwa, model, cena, zuzycieEnergii, data){
        this.id = id;
        this.nazwa = nazwa;
        this.model = model;
        this.cena = cena;
        this.zuzycieEnergii = zuzycieEnergii;
        this.data = data;
    }
    koszt(){
        return this.cena;
    }
    kosztEnergii(cenaEnergii){
        return this.zuzycieEnergii * cenaEnergii;
    }
    wiekProduktu(){
        var diff = Date.now() - this.data.getTime();
        var wiek = new Date(diff);
        return wiek;
    }
    wiekProduktuLata(){
        var diff = Date.now() - this.data.getTime();
        var wiek = new Date(diff);
        return Math.abs(wiek.getUTCFullYear() - 1970);
    }
}