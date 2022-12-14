import { ReactComponent as RegisterSVG } from "../../assets/svg/vector_1.svg";
import { ReactComponent as ArrowIconBlack } from "../../assets/svg/arrowIconBlack.svg";
import { ReactComponent as AccountIcon } from "../../assets/svg/account.svg";
import { ReactComponent as OrganizationIcon } from "../../assets/svg/organization.svg";
import { ReactComponent as MailIcon } from "../../assets/svg/mail.svg";
import { BiMessageCheck } from "react-icons/bi";
import TabBadge from "../../components/TabBadge/TabBadge";
import RegisterForm from "./RegisterForm";
import StageOneRegistration from "./formComponents/StageOneRegistration";
import StageTwoRegistration from "./formComponents/StageTwoRegistration";
import StageThreeRegistration from "./formComponents/StageThreeRegistration";
import { useSelector } from "react-redux";
import RegisterContextProvider from "../../context/RegisterUserContext";

const RegisterPage = () => {
  // current form state defines the c urrent orm at which user it present
  const currentFormState = useSelector((state) => state.registerFormState);

  const renderFormStage = () => {
    switch (currentFormState) {
      case 0:
        return (
          <RegisterForm
            mainHeading="Welcome to Aquaint"
            secondaryHeading="Enter your email address"
          >
            <StageOneRegistration />
          </RegisterForm>
        );

      case 1:
        return (
          <RegisterForm
            mainHeading="Personal Information"
            secondaryHeading="We've sent a 4 digit code to vishesh@gmail.com"
          >
            <StageTwoRegistration />
          </RegisterForm>
        );

      case 2:
        return (
          <RegisterForm
            mainHeading="Create Organization"
            secondaryHeading="We've sent a 4 digit code to vishesh@gmail.com"
          >
            <StageThreeRegistration />
          </RegisterForm>
        );
      default:
        return;
    }
  };

  return (
    <RegisterContextProvider>
      <div className="w-screen h-screen  flex">
        {/* left */}
        <div className="w-[483px] h-screen  flex flex-col bg-primaryGrey">
          <div className="p-10 ">
            <div className="flex items-center  gap-1">
              <BiMessageCheck size={22} className="mt-2 text-primaryOrange " />
              <h1 className="font-bold text-2xl text-primaryBlue">aquaint</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 ">
            <RegisterSVG />
          </div>
        </div>
        {/* right */}
        <aside className=" flex-1 h-screen bg-primaryWhite flex justify-center items-center">
          {/* register section  */}
          <section className="w-3/4 h-3/4 ">
            <div className="w-full h-[12vh] flex items-center justify-center gap-5 ">
              <TabBadge
                primaryText="Email Address"
                secondaryrText="Organisation Email"
                icon={<MailIcon />}
                isActive={currentFormState === 0 ? true : false}
              />
              <ArrowIconBlack />
              <TabBadge
                primaryText="Personal"
                secondaryrText="Enter Information"
                icon={<AccountIcon />}
                isActive={currentFormState === 1 ? true : false}
              />
              <ArrowIconBlack />

              <TabBadge
                primaryText="Organisation"
                secondaryrText="Create Organisation"
                icon={<OrganizationIcon />}
                isActive={currentFormState === 2 ? true : false}
              />
            </div>
            <hr className=" my-1 ml-14" />

            <div className="ml-14 mt-5">
              {/* stages of form */}
              {renderFormStage()}
            </div>
          </section>
        </aside>
      </div>
    </RegisterContextProvider>
  );
};

export default RegisterPage;
