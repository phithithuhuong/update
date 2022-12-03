import {Invoice} from "./Invoice";
import {Room} from "../ThongTinTaiKhoan/Room/Room";

export class ManagerInvoice {
    private listInvoice: Invoice[] = [];

    addInvoice(invoice: Invoice) {
        this.listInvoice.push(invoice);

    }

    showAllInvoice() {
        console.log(this.listInvoice);
    }

    idInvoice(id) {
        for (let i = 0; i < this.listInvoice.length; i++) {
            if (this.listInvoice[i].id == id) {
                return i
            }

        }
    }

    editInvoice(id, invoice: Invoice) {
        for (let i = 0; i < this.listInvoice.length; i++) {
            if (id == this.listInvoice[i].id) {
                this.listInvoice[i] = invoice;
            }
        }



    }

    removeInvoice(id) {
        let index= this.idInvoice(id)
        if (typeof index === "number") {
            this.listInvoice.splice(index, 1)
        }

    }
}