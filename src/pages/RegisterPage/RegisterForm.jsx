const RegisterForm = ({ mainHeading, secondaryHeading, children }) => {
  return (
    <form className="flex flex-col">
      <h1 className="text-2xl text-primaryBlack font-semibold">
        {mainHeading}
      </h1>
      <span className="text-secondaryGrey">{secondaryHeading}</span>
      {children}
    </form>
  );
};

export default RegisterForm;
