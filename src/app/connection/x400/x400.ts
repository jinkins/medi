export class X400 {
    private c: string;
    private admd: string;
    private prmd: string;
    private o: string;
    private ou: string[];
    private g: string;
    private i: string;
    private s: string;

    constructor(c, a, p, o, ou, g, i, s) {
        this.c = c;
        this.admd = a;
        this.prmd = p;
        this.o = o;
        this.ou = ou;
        this.g = g;
        this.i = i;
        this.s = s;
    }
}
