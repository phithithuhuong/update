import {Room} from "./Room";
export class ManagerRoom {
     listRoom: Room[] = [];

    addRoom(room: Room){
      this.listRoom.push(room)
    }


    showRoom() {
        console.log(this.listRoom)
    }

    idRoom(id) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id) {
                return i
            }

        }
        return " ID is not"
    }

    editRoom(id, room: Room) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id == id) {
                return this.listRoom[i] = room;
            }

        }


    }

    searchRoom(price1, price2) {
        let arr = []
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].price < price1 && this.listRoom[i].price > price2 && this.listRoom[i].status === 'Empty') {
                arr.push(this.listRoom[i])
            }

        }
        console.table(arr);
    }

    removeRoom(id) {
        let index = this.idRoom(id);

        if (typeof index === "number") {
            this.listRoom.splice(index, 1)
        }
    }
    /*sửa*/
    testStatus(id){
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].status===''){

            }

        }
    }


}
