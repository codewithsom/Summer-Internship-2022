"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const usersRouter_1 = __importDefault(require("./routes/usersRouter"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/users', usersRouter_1.default);
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});