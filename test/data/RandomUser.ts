import { faker } from '@faker-js/faker';

export default class RandomUser {
    private username: string;
    private email: string;
    private password: string;

    constructor() {
        this.username = faker.internet.username();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

    public get getUsername(): string {
        return this.username;
    }

    public get getEmail(): string {
        return this.email;
    }

    public get getPassword(): string {
        return this.password;
    }
}
