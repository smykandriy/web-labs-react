import { baseHttp } from "./setup";

export const getHelicopters = async (query?: string) => {
  try {
    console.log(`/helicopters/${query ? query : ""}`);
    const response = await baseHttp.get(`/helicopters/${query ? query : ""}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
