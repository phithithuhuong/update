"use strict";
exports.__esModule = true;
exports.ManagerRoom = void 0;
var Room_1 = require("./Room");
var ManagerRoom = /** @class */ (function () {
    function ManagerRoom() {
        this.listRoom = [];
    }
    ManagerRoom.prototype.addRoom = function (room) {
        this.listRoom.push(room);
    };
    ManagerRoom.prototype.showRoom = function () {
        console.log(this.listRoom);
    };
    ManagerRoom.prototype.idRoom = function (id) {
        for (var i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id) {
                return i;
            }
        }
        return " ID is not";
    };
    ManagerRoom.prototype.editRoom = function (id, room) {
        for (var i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id == id) {
                return this.listRoom[i] = room;
            }
        }
    };
    ManagerRoom.prototype.searchRoom = function (price1, price2) {
        var arr = [];
        for (var i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].price < price1 && this.listRoom[i].price > price2 && this.listRoom[i].status === 'Empty') {
                arr.push(this.listRoom[i]);
            }
        }
        console.table(arr);
    };
    ManagerRoom.prototype.removeRoom = function (id) {
        var index = this.idRoom(id);
        if (typeof index === "number") {
            this.listRoom.splice(index, 1);
        }
    };
    /*sửa*/
    ManagerRoom.prototype.testStatus = function (id) {
        for (var i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].status === '') {
            }
        }
    };
    return ManagerRoom;
}());
exports.ManagerRoom = ManagerRoom;
var manager = new ManagerRoom();
var a2 = new Room_1.Room(1, 'sz', 111, 2, 2, 'ss');
console.log(manager.addRoom(a2));
