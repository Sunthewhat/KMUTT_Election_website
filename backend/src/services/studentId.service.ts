import { decode } from "hono/jwt";
import { getCookie } from "hono/cookie";

export const getStudentId = async (c) => {
  try {
    const token = getCookie(c, "session");
    if (!token) {
      throw new Error("No session token found");
    }
    const { payload } = decode(token) || "";
    return payload;
  } catch (error) {
    throw new Error("Unauthorized");
  }
};
