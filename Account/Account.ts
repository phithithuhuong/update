
export class Account {
    get accountName(): string {
        return this._accountName;
    }

    set accountName(value: string) {
        this._accountName = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }

    get numberPhone(): string {
        return this._numberPhone;
    }

    set numberPhone(value: string) {
        this._numberPhone = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    private _accountName: string;
    private _passWord: string;
    private _numberPhone: string;
    private _address: string;
    private _email: string;
    private _fullName: string;
    private _age: number;


    constructor(accountName: string, passWord: string, numberPhone: string, address: string, email: string, fullName: string, age: number) {
        this._accountName = accountName;
        this._passWord = passWord;
        this._numberPhone = numberPhone;
        this._address = address;
        this._email = email;
        this._fullName = fullName;
        this._age = age;

    }

}

