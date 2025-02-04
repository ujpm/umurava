import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import ForlearninginstitutionspageRow from "./ForlearninginstitutionspageRow";
import ForlearninginstitutionspageRowFour from "./ForlearninginstitutionspageRowFour";
import ForlearninginstitutionspageRowSeven from "./ForlearninginstitutionspageRowSeven";
import ForlearninginstitutionspageRowTwo from "./ForlearninginstitutionspageRowTwo";
import ForlearninginstitutionspageRowjoinafeweduc from "./ForlearninginstitutionspageRowjoinafeweduc";
import React from "react";

export default function FORLEARNINGINSTITUTIONSPAGEPage() {
  return (
    <>
      <Helmet>
        <title>umurava-1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div>
          <header className="flex items-center justify-center bg-[#ffffff] py-[1.50rem] sm:py-[1.25rem]">
            <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
              <Img
                src="images/img_header_logo.png"
                alt="Headerlogo"
                className="h-[2.63rem] w-[7.63rem] object-contain"
              />
              <ul className="flex flex-wrap items-center gap-[2.25rem]">
                <li>
                  <a href="#" className="cursor-pointer">
                    <Heading
                      as="p"
                      className="!font-['DM_Sans'] text-[0.88rem] font-medium !text-[#2b3338] hover:!text-[#2b71f0]"
                    >
                      Home
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <Heading
                      as="p"
                      className="!font-['DM_Sans'] text-[0.88rem] font-medium !text-[#2b3338] hover:!text-[#2b71f0]"
                    >
