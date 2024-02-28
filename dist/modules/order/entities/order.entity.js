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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const entity_typeorm_1 = require("../../../shared/entities/entity-typeorm");
const typeorm_1 = require("typeorm");
let OrderEntity = class OrderEntity extends entity_typeorm_1.TypeOrmEntity {
};
exports.OrderEntity = OrderEntity;
__decorate([
    (0, typeorm_1.Column)({ name: "code", length: 20, nullable: false }),
    __metadata("design:type", String)
], OrderEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', length: 255, nullable: false }),
    __metadata("design:type", String)
], OrderEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'value', nullable: false }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.orderList),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderEntity.prototype, "user", void 0);
exports.OrderEntity = OrderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "orders" })
], OrderEntity);
//# sourceMappingURL=order.entity.js.map