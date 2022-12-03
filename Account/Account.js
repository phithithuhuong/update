"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountName, passWord, numberPhone, address, email, fullName, age) {
        this._accountName = accountName;
        this._passWord = passWord;
        this._numberPhone = numberPhone;
        this._address = address;
        this._email = email;
        this._fullName = fullName;
        this._age = age;
    }
    Object.defineProperty(Account.prototype, "accountName", {
        get: function () {
            return this._accountName;
        },
        set: function (value) {
            this._accountName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "passWord", {
        get: function () {
            return this._passWord;
        },
        set: function (value) {
            this._passWord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "numberPhone", {
        get: function () {
            return this._numberPhone;
        },
        set: function (value) {
            this._numberPhone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
