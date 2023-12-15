import { baseHttp } from "./setup";

export const retrieveHelicopter = async (id: string | number) => {
  try {
    const response = await baseHttp.get(`/helicopters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
