import {ManagerAccount} from "./Account/managerAccount";
import {Account} from "./Account/Account";
import {ManagerRoom} from "./ThongTinTaiKhoan/Room/ManagerRoom";
import {Room} from "./ThongTinTaiKhoan/Room/Room";

let managerAccount = new ManagerAccount();
let input = require('readline-sync');
console.log(`
    -----Vui lòng đăng kí để vào quản lí----
  `
)

function accountDK() {
    let exit = true;
    while (exit!) {
        let menu = `
    1. Đăng kí
    2. Đăng nhập
    0. Thoát !
    `
        console.log(menu)
        let choice = +input.question('Enter choice ?');
        switch (choice) {
            case 1:
                let accountName = input.question('Enter by account Name :')
                let passWord = input.question('Enter by account pass Word :')
                let numberPhone = input.question('Enter by number Phone :')
                let address = input.question('Enter by address :')
                let email = input.question('Enter by account email :')
                let fullName = input.question('Enter by account full Name :')
                let age = +input.question('Enter by account age :');
                let account = new Account(accountName, passWord, numberPhone, address, email, fullName, age);
                managerAccount.addAccount(account);
                managerAccount.showAcc()
                console.log(`
        Tài khoản đang đăng nhập là đây !
        Họ tên :  ${fullName}
        Tên tài khoản : ${accountName}
        Tuổi : ${age}
        Sô điện thoại : ${numberPhone}`)
                break;
            case 2:
                let accountName1 = input.question('Enter by account Name :')
                let passWord1 = input.question('Enter by account pass Word :')
                let a = managerAccount.logIn(accountName1, passWord1)
                if (a.length === 0) {
                    console.log('Try again !')
                } else {
                    roomAndInvoice()
                }
                break;
            case 3:
                exit = false
                break;

        }
    }
}

accountDK();
let manageRoom = new ManagerRoom()
let a1 = new Room(1, 'A1', 300, 2, 1, 'Ready')
let b2 = new Room(2, 'B2', 500, 2, 1, 'Empty')
let c3 = new Room(3, 'C3', 700, 2, 2, 'Fixing')
manageRoom.addRoom(a1)
manageRoom.addRoom(b2)
manageRoom.addRoom(c3)
function room() {
    let exit = true;
    while (exit!) {
        console.log(`
            1. Thêm phòng
            2. Hiện thông tin phòng
            3. Sửa thông tin phòng
            4. Tìm phòng trống theo giá
            5. Kiểm tra phòng trong khoảng thời gian        
            6. Xóa phòng
            0. Thoát 
            `)
        let choice= +input.question('Nhap lua chon tren ?');
        switch (choice){
            case 1:
                let id= +input.question('Nhap ID :')
                let roomName= input.question('Nhap ten phong :')
                let price= +input.question('Nhap gia :')
                let wcNumber= +input.question('Nhap so nha ve sinh :')
                let  roomNumber= +input.question('Nhap so phong ngu :')
                let status= input.question('Nhap trang thai cua phong :');
                let room= new Room(id,roomName, price ,wcNumber,roomNumber,status);
              manageRoom.addRoom(room)
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
                exit= false;
                break;
        }

    }
}

function roomAndInvoice() {
    let exit = true;
    let choice = `
-----Nhập lựa chọn-----
1. Quản lí phòng
2. Quản lí hóa đơn
3. Thống kê doanh thu
0. Thoát ra`
    while (exit!) {
        console.log(choice)
        let enterChoice = +input.question('Enter by choice ?');
        switch (enterChoice) {
            case 1:
                room()
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