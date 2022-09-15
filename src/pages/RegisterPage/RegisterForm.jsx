import { motion } from "framer-motion";
import React from "react";

const RegisterForm = ({ mainHeading, secondaryHeading, children }) => {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col"
    >
      <h1 className="text-2xl text-primaryBlack font-semibold">
        {mainHeading}
      </h1>
      <span className="text-secondaryGrey">{secondaryHeading}</span>
      {children}
    </motion.form>
  );
};

export default RegisterForm;
