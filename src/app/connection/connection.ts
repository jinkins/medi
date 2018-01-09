import { X400 } from './x400';
import { TP } from './tp';

export class Connection {

    constructor(data) {
        this.id = data.id;
        this.gln = data.gln;
        this.type = data.type;
        this.tp = data.type;
        this.x400 = data.x400;
        this.activationDate = data.activationDate;
        this.actif = data.actif;
    }

    private id: number;
    private gln: string;
    private type: string;
    private tp: TP;
    private x400: X400;
    private activationDate: Date;
    private actif: boolean;
}

/* 
 
Faire un split fournisseur / Connexion

Fournisseur
    SAPID (PK)
    Nom
    GLN (table intermédiaire pour histo? )
    Numero de TVA
    Langue
    Adresse email

Connexion : 
    id (PK)
    GLN 
    Type de message 
    TP
    Type (AS2/X400)
    X400 FK
    Date creation
    Actif (Yes / No / In progress )


Demande : 
    Numero ARS : 
    Connection (FK)
    Caller : 
    Fournisseur
    Connexion 
    Date demande
    Date de création
    Status (Waiting for Carrefour / ... for Orange ... / for Care / for Supplier / for TP / Created / Canceled )

X400
    (x400 info)

*/
