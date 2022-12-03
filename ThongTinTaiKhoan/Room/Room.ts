export class Room {
    private _id:number;
    private _roomName:string;
    private _price: number;
    private _wcNumber:number;
    private _roomNumber:number;
    private _status:string;

    constructor(id: number, roomName:string, price: number, wcNumber: number, roomNumber: number, status: string) {
        this._id = id;
        this._roomName=roomName;
        this._price = price;
        this._wcNumber = wcNumber;
        this._roomNumber = roomNumber;
        this._status = status;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
    get roomName(): string {
        return this._roomName;
    }

    set roomName(value: string) {
        this._roomName = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get wcNumber(): number {
        return this._wcNumber;
    }

    set wcNumber(value: number) {
        this._wcNumber = value;
    }

    get roomNumber(): number {
        return this._roomNumber;
    }

    set roomNumber(value: number) {
        this._roomNumber = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}
