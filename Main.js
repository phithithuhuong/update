"use strict";
exports.__esModule = true;
var managerAccount_1 = require("./Account/managerAccount");
var Account_1 = require("./Account/Account");
var ManagerRoom_1 = require("./ThongTinTaiKhoan/Room/ManagerRoom");
var Room_1 = require("./ThongTinTaiKhoan/Room/Room");
var managerAccount = new managerAccount_1.ManagerAccount();
var input = require('readline-sync');
console.log("\n    -----Vui l\u00F2ng \u0111\u0103ng k\u00ED \u0111\u1EC3 v\u00E0o qu\u1EA3n l\u00ED----\n  ");
function accountDK() {
    var exit = true;
    while (exit) {
        var menu = "\n    1. \u0110\u0103ng k\u00ED\n    2. \u0110\u0103ng nh\u1EADp\n    0. Tho\u00E1t !\n    ";
        console.log(menu);
        var choice = +input.question('Enter choice ?');
        switch (choice) {
            case 1:
                var accountName = input.question('Enter by account Name :');
                var passWord = input.question('Enter by account pass Word :');
                var numberPhone = input.question('Enter by number Phone :');
                var address = input.question('Enter by address :');
                var email = input.question('Enter by account email :');
                var fullName = input.question('Enter by account full Name :');
                var age = +input.question('Enter by account age :');
                var account = new Account_1.Account(accountName, passWord, numberPhone, address, email, fullName, age);
                managerAccount.addAccount(account);
                managerAccount.showAcc();
                console.log("\n        T\u00E0i kho\u1EA3n \u0111ang \u0111\u0103ng nh\u1EADp l\u00E0 \u0111\u00E2y !\n        H\u1ECD t\u00EAn :  ".concat(fullName, "\n        T\u00EAn t\u00E0i kho\u1EA3n : ").concat(accountName, "\n        Tu\u1ED5i : ").concat(age, "\n        S\u00F4 \u0111i\u1EC7n tho\u1EA1i : ").concat(numberPhone));
                break;
            case 2:
                var accountName1 = input.question('Enter by account Name :');
                var passWord1 = input.question('Enter by account pass Word :');
                var a = managerAccount.logIn(accountName1, passWord1);
                if (a.length === 0) {
                    console.log('Try again !');
                }
                else {
                    roomAndInvoice();
                }
                break;
            case 3:
                exit = false;
                break;
        }
    }
}
accountDK();
var manageRoom = new ManagerRoom_1.ManagerRoom();
var a1 = new Room_1.Room(1, 'A1', 300, 2, 1, 'Ready');
var b2 = new Room_1.Room(2, 'B2', 500, 2, 1, 'Empty');
var c3 = new Room_1.Room(3, 'C3', 700, 2, 2, 'Fixing');
manageRoom.addRoom(a1);
manageRoom.addRoom(b2);
manageRoom.addRoom(c3);
function room() {
    var exit = true;
    while (exit) {
        console.log("\n            1. Th\u00EAm ph\u00F2ng\n            2. Hi\u1EC7n th\u00F4ng tin ph\u00F2ng\n            3. S\u1EEDa th\u00F4ng tin ph\u00F2ng\n            4. T\u00ECm ph\u00F2ng tr\u1ED1ng theo gi\u00E1\n            5. Ki\u1EC3m tra ph\u00F2ng trong kho\u1EA3ng th\u1EDDi gian        \n            6. X\u00F3a ph\u00F2ng\n            0. Tho\u00E1t \n            ");
        var choice = +input.question('Nhap lua chon tren ?');
        switch (choice) {
            case 1:
                var id = +input.question('Nhap ID :');
                var roomName = input.question('Nhap ten phong :');
                var price = +input.question('Nhap gia :');
                var wcNumber = +input.question('Nhap so nha ve sinh :');
                var roomNumber = +input.question('Nhap so phong ngu :');
                var status_1 = input.question('Nhap trang thai cua phong :');
                var room_1 = new Room_1.Room(id, roomName, price, wcNumber, roomNumber, status_1);
                console.log(manageRoom.addRoom(room_1));
                break;
            case 2:
                manageRoom.showRoom();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 0:
                exit = false;
                break;
        }
    }
}
function roomAndInvoice() {
    var exit = true;
    var choice = "\n-----Nh\u1EADp l\u1EF1a ch\u1ECDn-----\n1. Qu\u1EA3n l\u00ED ph\u00F2ng\n2. Qu\u1EA3n l\u00ED h\u00F3a \u0111\u01A1n\n3. Th\u1ED1ng k\u00EA doanh thu\n0. Tho\u00E1t ra";
    while (exit) {
        console.log(choice);
        var enterChoice = +input.question('Enter by choice ?');
        switch (enterChoice) {
            case 1:
                room();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 0:
                exit = false;
                break;
        }
    }
}
