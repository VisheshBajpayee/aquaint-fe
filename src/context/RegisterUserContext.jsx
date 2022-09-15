import { createContext } from "react";
import { useDispatch } from "react-redux";
import { changeFormStage } from "../redux/features/registerFormFeature";

export const RegisterUserContext = createContext();

const RegisterContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const toggleFormState = (stage, event) => {
    event.preventDefault();
    dispatch(changeFormStage(stage));
  };
  const val = 1;
  return (
    <RegisterUserContext.Provider
      value={{ val, handleChange, toggleFormState }}
    >
      {children}
    </RegisterUserContext.Provider>
  );
};

export default RegisterContextProvider;
