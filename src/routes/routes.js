import { PATHS } from "../paths/paths";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    key: PATHS.registerPage,
    path: PATHS.registerPage,
    Element: RegisterPage,
  },
  {
    key: PATHS.loginPage,
    path: PATHS.loginPage,
    Element: LoginPage,
  },
  {
    key: PATHS.forgotPassword,
    path: PATHS.forgotPassword,
    Element: ForgotPasswordPage,
  },
  {
    key: PATHS.resetPassword,
    path: PATHS.resetPassword,
    Element: ResetPasswordPage,
  },
  {
    key: PATHS.dashboard,
    path: PATHS.dashboard,
    Element: Dashboard,
  },
];

export default routes;
