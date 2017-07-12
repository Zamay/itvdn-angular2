"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_1 = require("../user");
var UserForm2Component = (function () {
    function UserForm2Component() {
        this.roles = ["Guest", "Moderator", "Administartor"];
        this.model = new user_1.User(1, "", "", null);
        this.submitted = false;
    }
    UserForm2Component.prototype.onSubmit = function () {
        this.submitted = true;
    };
    UserForm2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "user-form2",
            templateUrl: "user-form2.component.html",
            styleUrls: [
                "../../../node_modules/bootstrap/dist/css/bootstrap.css",
                "user-form2.component.css"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserForm2Component);
    return UserForm2Component;
}());
exports.UserForm2Component = UserForm2Component;
//# sourceMappingURL=user-form2.component.js.map