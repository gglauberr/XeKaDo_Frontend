import api from '../config/api';
import { LoginRequest } from '../models/request/Authentication/LoginRequest';

export const fazerLogin = (req: LoginRequest) =>
  api.post('Authentication/FazerLogin', req);
