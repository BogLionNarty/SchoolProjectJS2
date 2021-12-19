let magazyn = new Magazyn()
class Sklep extends ListaTowarow{
    dodajProdukt(nazwa, model, cena, zuzycieEnergii, idProduktu){
        if (magazyn.istnieje(nazwa, model, cena, zuzycieEnergii) == false)
            idProduktu = (typeof idProduktu !== 'undefined') ? idProduktu : magazyn.generujId();
        else
            idProduktu = magazyn.istnieje(nazwa, model, cena, zuzycieEnergii);
        magazyn.dodajProdukt(new Produkt(idProduktu, nazwa, model, cena, zuzycieEnergii, new Date()));
    }
}