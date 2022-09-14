import React, { useState } from "react";
import { ReactComponent as RegisterSVG } from "../../assets/svg/vector_1.svg";
import { ReactComponent as ArrowIconBlack } from "../../assets/svg/arrowIconBlack.svg";
import { ReactComponent as AccountIcon } from "../../assets/svg/account.svg";
import { ReactComponent as OrganizationIcon } from "../../assets/svg/organization.svg";
import { ReactComponent as MailIcon } from "../../assets/svg/mail.svg";
import { BiMessageCheck } from "react-icons/bi";
import TabBadge from "../../components/TabBadge/TabBadge";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const RegisterPage = () => {
  const [formState, setFormState] = useState([1, 0, 0]);
  return (
    <div className="w-screen h-screen  flex">
      {/* left */}
      <div className="w-[483px] h-screen  flex flex-col bg-primaryGrey">
        <div className="p-10 ">
          <div className="flex items-center  gap-1">
            <BiMessageCheck size={22} className="mt-2 text-primaryOrange " />
            <h1 className="font-bold text-2xl">aquaint</h1>
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
              isActive
            />
            <ArrowIconBlack />
            <TabBadge
              primaryText="Personal"
              secondaryrText="Enter Information"
              icon={<AccountIcon />}
            />
            <ArrowIconBlack />

            <TabBadge
              primaryText="Organisation"
              secondaryrText="Create Organisation"
              icon={<OrganizationIcon />}
            />
          </div>
          <hr className=" my-1 ml-14" />

          <div className="ml-14 mt-10">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">Welcome to Aquaint</h1>
              <span className="text-secondaryGrey">
                Enter your email address
              </span>
              {/* first form stage */}
              <div>
                {/* input component */}
                <Input
                  type="text"
                  name="email"
                  id="email"
                  label="Email"
                  required
                />

                {/* button component */}
                <div className="flex justify-end w-3/4 py-4">
                  <Button btnText="Next" showArrow />
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default RegisterPage;
