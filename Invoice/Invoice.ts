export class Invoice{
    private _id:number;
    private _namePerson:string;
    private _staffName:string;
    private _startTime:number;
    private _endTime:number;
    private _sumMoney:[]=[];

    constructor(id: number, namePerson: string, staffName: string, startTime: number, endTime: number, sumMoney: []) {
        this._id = id;
        this._namePerson = namePerson;
        this._staffName = staffName;
        this._startTime = startTime;
        this._endTime = endTime;
        this._sumMoney = sumMoney;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get namePerson(): string {
        return this._namePerson;
    }

    set namePerson(value: string) {
        this._namePerson = value;
    }

    get staffName(): string {
        return this._staffName;
    }

    set staffName(value: string) {
        this._staffName = value;
    }

    get startTime(): number {
        return this._startTime;
    }

    set startTime(value: number) {
        this._startTime = value;
    }

    get endTime(): number {
        return this._endTime;
    }

    set endTime(value: number) {
        this._endTime = value;
    }

    get sumMoney(): [] {
        return this._sumMoney;
    }

    set sumMoney(value: []) {
        this._sumMoney = value;
    }
}