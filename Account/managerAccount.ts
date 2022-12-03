import {Account} from "./Account";
export class ManagerAccount {
    listAccount: Account[] = [];
    addAccount(account:Account){
        this.listAccount.push(account)
    }
    showAcc(){
        console.log(this.listAccount)
    }
    logIn(accountName: string, passWord: string) {
      return  this.listAccount.filter(obj => obj.accountName === accountName && obj.passWord===passWord)

    }

}