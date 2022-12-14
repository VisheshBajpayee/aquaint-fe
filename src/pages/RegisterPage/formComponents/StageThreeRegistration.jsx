import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { GrCircleInformation } from "react-icons/gr";
import { motion } from "framer-motion";
import { RegisterUserContext } from "../../../context/RegisterUserContext";
import { useContext } from "react";
const StageThreeRegistration = () => {
  const { toggleFormState } = useContext(RegisterUserContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" w-3/4 "
    >
      <Input
        id="organization-name"
        name="organization"
        label="Organisation name"
        placeholder="Enter Organization name"
        required
      />
      <Input
        id="subdomain-name"
        name="subDomain"
        label="Sub Domain Name"
        placeholder="Enter Subdomain name"
        required
        labelTooltip
        tooltipText="organisation sub domain details"
        tooltipIcon={<GrCircleInformation />}
      />
      <div className="flex justify-between mt-6">
        <Button
          btnText="Previous"
          variant="outline"
          arrowLeft
          onClick={(e) => {
            toggleFormState(1, e);
          }}
        />
        <Button btnText="Create" variant="success" />
      </div>
      <div className="flex gap-5 w-full justify-center mt-5">
        <span>
          Dont have an account?{" "}
          <span className="text-primaryOrange cursor-pointer">Register</span>
        </span>
      </div>
    </motion.div>
  );
};

export default StageThreeRegistration;
