export class Fournisseur {
    private lifnr: number;
    private name: string;
    private gln: string;
    private tva: string;
    private lang: string;

    constructor(l, name, gln, tva, lang, email) {
        this.lifnr = l;
        this.name = name;
        this.gln = gln;
        this.tva = tva;
        this.lang = lang;
    }
}
