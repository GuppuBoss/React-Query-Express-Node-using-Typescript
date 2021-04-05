"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const sum = (req, res) => {
    try {
        const { number1, number2 } = req.body;
        const sum = number1 + number2;
        res
            .status(201)
            .json({
            message: `sum of ${number1} and ${number2} = ${sum}`,
            sum
        });
    }
    catch (error) {
        throw error;
    }
};
exports.sum = sum;
