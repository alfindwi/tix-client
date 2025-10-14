import { api } from "@/lib/api";
import { IUser } from "@/types/user";
import { RegisterSchema } from "@/validations/registerSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const loginAsync = createAsyncThunk<
  { token: string; user: IUser },
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async (data, thunkAPI) => {
  try {
    const res = await api.post("/auth/login", data);
    const { token, user } = res.data;

    Cookies.set("token", token, { expires: 7 });
    Cookies.set("role", user.role, { expires: 7 });

    return { token, user };
  } catch (error: any) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      "Login failed. Please check your email and password.";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const registerAsync = createAsyncThunk<
  { token: string; user: IUser },
  RegisterSchema,
  { rejectValue: string }
>("auth/register", async (data, thunkAPI) => {
  try {
    const res = await api.post("/auth/register", data);
    const { token, user } = res.data;

    Cookies.set("token", token, { expires: 7 });
    Cookies.set("role", user.role, { expires: 7 });

    return { token, user };
  } catch (error: any) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      "Registration failed. Please check your input.";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

