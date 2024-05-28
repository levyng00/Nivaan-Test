//@ts-nocheck
"use client";
import { MoveRight, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { rubikReg, rubikSemiBold, rubikSemiBolder } from "@/app/fonts";

const defaultFormAction =
  "https://forms.zohopublic.in/nivaancare/form/NivaanNextjsLandingPageForm/formperma/Y2HL_Hh_THFjClPHcsQQZEjs07EIREE70jNJB07Srvk/htmlRecords/submit";

const Form = ({
  setModal,
  subHeading,
  formLocation,
  formActionLink = defaultFormAction,
  formName,
  header,
}: {
  formActionLink?: string;
  subHeading?: string;
  formName?: "Page-Form" | "CTA-Form";
  header?: string;
  formLocation?: string;
  setModal?: any;
}) => {
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLSelectElement>(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [keywords, setKeywords] = useState("");
  const [matchtype, setMatchtype] = useState("");
  const [errors, setErrors] = useState({ fullName: "", phoneNumber: "" });
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source") ?? "";
  const utm_medium = searchParams.get("utm_medium") ?? "";
  const utm_campaign = searchParams.get("utm_campaign") ?? "";
  const utm_term = searchParams.get("utm_term") ?? "";
  const utm_content = searchParams.get("utm_content") ?? "";
  const utm_placement = searchParams.get("utm_placement") ?? "";
  const utm_ad_id = searchParams.get("utm_ad_id") ?? "";
  const utm_adset_id = searchParams.get("utm_adset_id") ?? "";
  const utm_ad_name = searchParams.get("utm_ad_name") ?? "";
  const utm_platform = searchParams.get("utm_platform") ?? "";
  const utm_campaign_id = searchParams.get("utm_campaign_id") ?? "";
  const url = landingPageUrl;

  const gclid = searchParams.get("gclid") ?? "";
  const fbclid = searchParams.get("fbclid") ?? "";

  useEffect(() => {
    const landingPageUrl = window.location.href;
    console.log(landingPageUrl);
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!fullName || !phoneNumber) {
      setErrors({
        fullName: !fullName ? "Full name is required" : "",
        phoneNumber: !phoneNumber ? "Phone number is required" : "",
      });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const value = event.target.value;
    if (field === "fullName") {
      const regex = /^\s*[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*\s*$/;
      setFullName(value);
      if (regex.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, fullName: "" }));
      } else {
        setFullName(value.slice(0, value.length - 1));
        setErrors((prevErrors) => ({
          ...prevErrors,
          fullName: "Please enter a valid name.",
        }));
      }
    }
    if (field === "phoneNumber") {
      const regex = /^[0-9]*$/;
      if (regex.test(value)) {
        setPhoneNumber(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Enter digits only",
        }));
      }

      if (parseInt(value.charAt(0)) < 6) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Phone number should start with a digit greater than 5.",
        }));
      }
      if (phoneNumber.length !== 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Enter a valid phone number",
        }));
      }
    }
    if (field === "city") {
      setCity(value);
    }
  };

  const isValid =
    !(parseInt(phoneNumber.charAt(0)) < 5) && phoneNumber.length === 10;

  return (
    <form
      action={formActionLink}
      name="form"
      id="form"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="bg-white w-full min-w-[370px] lg:w-[480px] p-4 rounded-xl relative lg:pt-6 z-[99] shadow-lg border-[1px] border-[#F4F3ED] pb-10"
    >
      <input type="hidden" name="utm_source" value={utm_source} />
      <input type="hidden" name="utm_medium" value={utm_medium} />
      <input type="hidden" name="utm_campaign" value={utm_campaign} />
      <input type="hidden" name="utm_term" value={utm_term} />
      <input type="hidden" name="utm_content" value={utm_content} />
      <input type="hidden" name="utm_placement" value={utm_placement} />
      <input type="hidden" name="utm_ad_id" value={utm_ad_id} />
      <input type="hidden" name="utm_adset_id" value={utm_adset_id} />
      <input type="hidden" name="utm_ad_name" value={utm_ad_name} />
      <input type="hidden" name="utm_platform" value={utm_platform} />
      <input type="hidden" name="utm_campaign_id" value={utm_campaign_id} />
      <input type="hidden" name="page_url" value={url} />
      <input type="hidden" name="form_location" value={formLocation} />

      <h2
        className={` ${rubikSemiBolder.className} text-center my-2 text-xl md:text-3xl lg:mb-3 text-[#2F438F]`}
      >
        Book Consultation
      </h2>
      <p className="text-center text-[10px] lg:text-left">{subHeading}</p>
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <div
            className="flex bg-[#EAF1FB] rounded-lg items-center text-xs p-1 px-2 lg:text-sm text-[#888888]"
            onClick={() => inputRef2.current?.focus()}
          >
            <label className="p-2">
              Name <em>*</em>
            </label>
            <input
              type="text"
              name="SingleLine"
              value={fullName}
              maxLength={255}
              ref={inputRef2}
              onChange={(event) => handleInputChange(event, "fullName")}
              className="p-2 rounded-lg border-none outline-none flex-1 bg-[#EAF1FB]"
            />
          </div>
          <p className="mt-2 text-red-600 text-xs">{errors.fullName}</p>
        </div>
        <div
          className="flex bg-[#EAF1FB] rounded-lg items-center text-xs p-1 px-2 lg:text-sm text-[#888888]"
          onClick={() => inputRef.current?.focus()}
        >
          <label className="p-2">
            Mobile Number <em>*</em>
          </label>
          <input
            type="text"
            name="PhoneNumber_countrycode"
            maxLength={10}
            value={phoneNumber}
            id="international_PhoneNumber_countrycode"
            ref={inputRef}
            onChange={(event) => handleInputChange(event, "phoneNumber")}
            className="border-none outline-none p-2 flex-1 rounded-lg bg-[#EAF1FB]"
          />
        </div>
        <div
          className="bg-[#EAF1FB] flex items-center text-xs p-1 px-2 lg:text-sm text-[#888888] rounded-lg mt-1"
          onClick={() => inputRef3.current?.focus()}
        >
          <label className="p-2">Select City*</label>
          <select
            ref={inputRef3}
            name="Dropdown1"
            value={city}
            onChange={(event) => handleInputChange(event, "city")}
            className="border-none outline-none p-2 flex-1 rounded-lg bg-[#EAF1FB]"
          >
            <option value="New Delhi">New Delhi</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Faridabad">Faridabad</option>
          </select>
        </div>
        <div>
          {!isValid && (
            <p className="text-red-600 text-xs ">{errors.phoneNumber}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-2 lg:mt-0">
        {!phoneNumber || !fullName || !isValid ? (
          <button
            type="button"
            onClick={() => alert("Please fill all the fields")}
            className="bg-[#DB5115] rounded-lg flex gap-2 shadow-sm mt-2 lg:mt-0 px-8 text-white font-semibold p-2"
          >
            Consult Now
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#DB5115] rounded-lg flex gap-2 shadow-sm mt-8 lg:mt-0 px-8 text-white font-semibold p-2"
          >
            Consult Now
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
