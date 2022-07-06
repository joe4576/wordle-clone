import type { ApiResponse } from "../../../backend/types/types";

const getRandomWordByLength = async (len: number): Promise<string> => {
  let response = "";

  try {
    const res = await fetch(`http://localhost:3030/word/${len}`);
    response = ((await res.json()) as ApiResponse).res;
  } catch {
    throw new Error("Word not found");
  }

  return response;
};

export default {
  getRandomWordByLength,
};
