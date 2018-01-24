import { Fournisseur } from './../fournisseur/fournisseur';
import { X400 } from './x400/x400';
import { TP } from './tp/tp';

export class Connection {

    constructor(data) {
        this.id = data.id;
        this.gln = data.gln;
        this.message = data.message;
        this.tp = data.tp == null ? null : new TP(data.tp);
        this.x400 = data.x400 == null ? null : new X400(data.x400);
        this.modate = data.modate;
        this.credat = data.credat;
        this.actif = data.actif;
        this.copy = data.copy;
        
        if(data.suppliers) {
            data.suppliers.forEach((e) => {
                this.suppliers.push(new Fournisseur(e));
            })
        }
    }

    private id: number;
    private gln: string;
    private message: string;
    private tp: TP;
    private x400: X400;
    private modate: Date;
    private credat: Date;
    private actif: boolean;
    private copy: string;
    private suppliers: Fournisseur[] = [];

    public displayTPCon() {
        if(this.x400) {
            return "C="+this.x400.c + "/A="+this.x400.admd+"/P="+this.x400.prmd+"/O="+this.x400.o+"/S="+this.x400.s;
        } else {
            return "AS2 = " + this.tp.as2id + " AS2 url = " + this.tp.as2url;
        }
    }
}
