export class Fournisseur {
    private lifnr: number;
    private name: string;
    private gln: string;
    private tva: string;
    private lang: string;

    constructor(obj) {
        this.lifnr = obj.lifnr;
        if(obj.supName) {
            this.name = obj.supName;
        } else {
            this.name = obj.name;
        }
        
        this.gln = obj.gln;
        this.tva = obj.tva;
        this.lang = obj.lang;
    }
}
