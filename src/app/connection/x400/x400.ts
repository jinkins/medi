export class X400 {
    private gln: string;
    private c: string;
    private admd: string;
    private prmd: string;
    private o: string;
    private ou1: string;
    private ou2: string;
    private ou3: string;
    private g: string;
    private i: string;
    private s: string;

    constructor(gln, c, a, p, o, ou1, ou2, ou3, g, i, s) {
        this.gln = gln;
        this.c = c;
        this.admd = a;
        this.prmd = p;
        this.o = o;
        this.ou1 = ou1;
        this.ou2 = ou1;
        this.ou3 = ou1;
        this.g = g;
        this.i = i;
        this.s = s;
    }
}
