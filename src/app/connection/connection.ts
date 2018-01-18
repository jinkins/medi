import { X400 } from './x400/x400';
import { TP } from './tp/tp';

export class Connection {

    constructor(data) {
        this.id = data.id;
        this.gln = data.gln;
        this.message = data.message;
        this.tp = data.tp;
        this.x400 = data.x400;
        this.modate = data.modate;
        this.credat = data.credat;
        this.actif = data.actif;
        this.copy = data.copy;
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
}
