export class TP {
    public type: string;
    public name: string;
    public as2url: string;
    public as2id: string;

    constructor(obj) {
        this.type = obj.typeCon;
        this.name = obj.name;
        this.as2url = obj.as2url;
        this.as2id = obj.as2id;
    }
}
