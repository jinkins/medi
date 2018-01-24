export class X400 {
    public gln: string;
    public c: string;
    public admd: string;
    public prmd: string;
    public o: string;
    public ou1: string;
    public ou2: string;
    public ou3: string;
    public g: string;
    public i: string;
    public s: string;

    constructor(obj) {
        this.gln = obj.gln;
        this.c = obj.c;
        this.admd = obj.admd;
        this.prmd = obj.prmd;
        this.o = obj.o;
        this.ou1 = obj.ou1;
        this.ou2 = obj.ou2;
        this.ou3 = obj.ou3;
        this.g = obj.g;
        this.i = obj.i;
        this.s = obj.s;
    }
 }
