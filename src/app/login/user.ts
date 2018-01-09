export class User {
    id: number;
    username: string;
    token: string;
    email: string;
    displayName: string;

    constructor(id, username, token, email, displayName) {
        this.id = id;
        this.username = username;
        this.token = token;
        this.email = email;
        this.displayName = displayName;

    }
}
