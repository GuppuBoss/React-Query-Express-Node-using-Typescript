import axios, { AxiosResponse } from "axios"

export const sumAsync = async ( formData: ISum ): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(process.env.REACT_APP_API_URL + "/sum", formData);
    return saveTodo;
  } catch (error) {
    throw new Error(error)
  }
}