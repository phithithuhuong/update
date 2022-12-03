"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(id, roomName, price, wcNumber, roomNumber, status) {
        this._id = id;
        this._roomName = roomName;
        this._price = price;
        this._wcNumber = wcNumber;
        this._roomNumber = roomNumber;
        this._status = status;
    }
    Object.defineProperty(Room.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "roomName", {
        get: function () {
            return this._roomName;
        },
        set: function (value) {
            this._roomName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "wcNumber", {
        get: function () {
            return this._wcNumber;
        },
        set: function (value) {
            this._wcNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "roomNumber", {
        get: function () {
            return this._roomNumber;
        },
        set: function (value) {
            this._roomNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    return Room;
}());
exports.Room = Room;
