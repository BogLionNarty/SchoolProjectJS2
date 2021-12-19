class ListaTowarow{
    constructor(){
        this.list = []
    }
    wypiszProdukt(idProduktu){
        let _exists = false;
        this.list.forEach(element => {
            if (element.id == idProduktu){
                console.log(element);
                _exists = true;
            }
        });
        if (!_exists)
            console.log("Element o podanym id nie istnieje");
    }
    wypiszWszystkieProdukty(){
        this.list.forEach(element => {
            console.log(element);
        });
    }
    dodajProdukt(produkt){
        let added = true;
        this.list.forEach(element => {
            if (element.id == produkt.id){
                console.log("Element o podanym id już istnieje");
                added = false;
            }
        });
        if(added)
            this.list.push(produkt);
        return added;
    }
    zmienProdukt(idProduktu, produkt){
        let changed = true;
        this.list.forEach(element => {
            if (element.id == idProduktu){

                this.list.forEach(element2 => {

                    if (element2.id == produkt.id && element2 != element){
                        console.log("Element o podanym id już istnieje");
                        changed = false;
                    }

                });

                if (changed)
                    this.list[this.list.indexOf(element)] = produkt;
            }
        });
        //if (!changed)
        //    console.log("Element o podanym id nie istnieje");
    }
}