"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/");
const router = express_1.Router();
router.post("/sum", controllers_1.sum);
exports.default = router;
