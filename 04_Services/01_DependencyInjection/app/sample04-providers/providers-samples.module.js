"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var ProvidersSamplesModule = (function () {
    function ProvidersSamplesModule() {
    }
    return ProvidersSamplesModule;
}());
ProvidersSamplesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [index_1.Sample1Component, index_1.Sample2Component, index_1.Sample3Component, index_1.Sample4Component, index_1.Sample5Component, index_1.Sample6Component, index_1.Sample7Component, index_1.Sample8Component]
    })
], ProvidersSamplesModule);
exports.ProvidersSamplesModule = ProvidersSamplesModule;
//# sourceMappingURL=providers-samples.module.js.map