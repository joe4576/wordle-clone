import type { ApiResponse } from "../../../backend/types/types";

const getJsonFromResponse = async <T = ApiResponse>(
  res: Response
): Promise<T> => (await res.json()) as T;

const getRandomWordByLength = async (len: number): Promise<string> => {
  let response = "";

  try {
    const res = await fetch(`http://localhost:3030/word/${len}`);
    response = (await getJsonFromResponse(res)).res;
  } catch {
    throw new Error("Word not found");
  }

  return response;
};

export default {
  getRandomWordByLength,
};
