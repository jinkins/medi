import { Fournisseur } from './../fournisseur/fournisseur';
import { Connection } from '../connection/connection';

export class Demand {
    private ars: number;
    private connection: Connection;
    private caller: string;
    private supplier: Fournisseur;
    private creationDate: Date;
    private realisationDate: Date;
    private status: string;  // Waiting for Carrefour / ... for Orange ... / for Care / for Supplier / for TP / Created / Canceled )
}
