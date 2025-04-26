"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "variables.env" });
class Security {
    isAuthenticated(req, res, next) {
        var _a;
        if (!req.headers.authorization) {
            return res.status(401).json({ error: "No autorizado" });
        }
        else {
            try {
                console.log("req.headers: ", req.headers);
                const myToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                const secret = process.env.JWT_SECRET;
                console.log("clavesita: ", secret);
                console.log("token: ", myToken);
                const datos = jsonwebtoken_1.default.verify(myToken, secret);
                next();
            }
            catch (error) {
                res.status(401).json({ error: "Falsificación de token" });
            }
        }
    }
}
const security = new Security();
exports.default = security;
