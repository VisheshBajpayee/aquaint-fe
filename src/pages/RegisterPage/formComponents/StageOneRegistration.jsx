import { motion } from "framer-motion";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { RegisterUserContext } from "../../../context/RegisterUserContext";
import { changeFormStage } from "../../../redux/features/registerFormFeature";
// stage one form for regiter page
const StageOneRegistration = () => {
  const { val, handleChange, toggleFormState } =
    useContext(RegisterUserContext);
  console.log(val);
  const dispatch = useDispatch();
  return (
    // stage one
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-3/4"
    >
      {/* input component */}
      <Input
        changeHandler={handleChange}
        type="text"
        name="email"
        id="email"
        label="Email"
        required
      />

      {/* button component */}
      <div className="flex justify-end  py-4">
        <Button
          onClick={(e) => {
            toggleFormState(1, e);
          }}
          btnText="Next"
          arrowRight
        />
      </div>
      <div className="text-xs flex gap-1 justify-center w-3/4">
        <span>Don't have account?</span>
        <span className="text-primaryOrange cursor-pointer font-semibold">
          Register
        </span>
      </div>
    </motion.div>
  );
};

export default StageOneRegistration;
