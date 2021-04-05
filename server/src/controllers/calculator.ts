import { Response, Request } from "express"
import { ISum } from "../types";

const sum = (req: Request, res: Response): void => {
  try {
    const { number1, number2 } = req.body as Pick<ISum, "number1" | "number2">  
    const sum: number = number1 + number2; 
    res
      .status(201)
      .json({ 
        message: `sum of ${number1} and ${number2} = ${sum}`, 
        sum
      });
  } catch (error) {
    throw error
  }
}

export { sum };
