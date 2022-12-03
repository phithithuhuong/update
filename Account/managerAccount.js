"use strict";
exports.__esModule = true;
exports.ManagerAccount = void 0;
var ManagerAccount = /** @class */ (function () {
    function ManagerAccount() {
        this.listAccount = [];
    }
    ManagerAccount.prototype.addAccount = function (account) {
        this.listAccount.push(account);
    };
    ManagerAccount.prototype.showAcc = function () {
        console.log(this.listAccount);
    };
    ManagerAccount.prototype.logIn = function (accountName, passWord) {
        return this.listAccount.filter(function (obj) { return obj.accountName === accountName && obj.passWord === passWord; });
    };
    return ManagerAccount;
}());
exports.ManagerAccount = ManagerAccount;
