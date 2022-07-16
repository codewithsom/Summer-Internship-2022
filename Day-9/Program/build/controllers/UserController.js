"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_oneUser = exports.update_oneUser = exports.create_oneUser = exports.find_oneUser = exports.get_allUsers = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const get_allUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield node_fs_1.default.readFile("data.json", "utf-8", (err, data) => {
        const fileContents = JSON.parse(data);
        res.json(fileContents);
    });
});
exports.get_allUsers = get_allUsers;
const find_oneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.query).length === 0) {
        res.redirect('/users/all');
    }
    else {
        yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
            const fileContents = JSON.parse(data);
            fileContents.forEach((item) => {
                if (item.email === req.query.email) {
                    res.json(item);
                }
                else {
                    res.send("<h1> User Not Found! </h1>");
                }
            });
        });
    }
});
exports.find_oneUser = find_oneUser;
const create_oneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        "name": req.body.name,
        "age": req.body.age,
        "profession": req.body.profession,
        "email": req.body.email,
        "gender": req.body.gender
    };
    yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
        const fileContents = JSON.parse(data);
        fileContents.push(newUser);
        node_fs_1.default.writeFile("data.json", JSON.stringify(fileContents), (err) => {
            if (err) {
                res.send('Error Writing File');
            }
            else {
                res.send('Data Added Successfully');
            }
        });
    });
});
exports.create_oneUser = create_oneUser;
const update_oneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.query).length === 0) {
        res.redirect('/users/all');
    }
    else {
        const oldEmail = req.query.email;
        const newEmail = req.body.email;
        yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
            const fileContents = JSON.parse(data);
            fileContents.forEach((item) => {
                if (item.email === oldEmail) {
                    item.email = newEmail;
                }
            });
            node_fs_1.default.writeFile("data.json", JSON.stringify(fileContents), (err) => {
                if (!err) {
                    res.send('Email Updated Successfully!');
                }
            });
        });
    }
});
exports.update_oneUser = update_oneUser;
const delete_oneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.query).length === 0) {
        res.redirect('/users/all');
    }
    else {
        const email = req.query.email;
        yield node_fs_1.default.readFile('data.json', 'utf-8', (err, data) => {
            const fileContents = JSON.parse(data);
            const newFileContents = fileContents.filter((item) => item.email !== email);
            node_fs_1.default.writeFile('data.json', JSON.stringify(newFileContents), (err) => {
                if (!err) {
                    res.send("User removed successfully");
                }
                else {
                    res.send("Error writing to file");
                }
            });
        });
    }
});
exports.delete_oneUser = delete_oneUser;