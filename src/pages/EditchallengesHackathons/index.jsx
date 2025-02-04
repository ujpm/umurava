import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Sidebar6 from "../../components/Sidebar6";
import EditchallengeshackathonsColumnThree from "./EditchallengeshackathonsColumnThree";
import EditchallengeshackathonsRowOne from "./EditchallengeshackathonsRowOne";
import React from "react";

export default function EditChallengesHackathonsPage() {
  return (
    <>
      <Helmet>
        <title>umurava-1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full bg-[#f9f9fb]">
        <Sidebar6 />
        <div className="flex flex-1 flex-col gap-[2.13rem] bg-[#f9f9fb]">
          <div>
            <Header />
            <EditchallengeshackathonsRowOne />
          </div>
          <EditchallengeshackathonsColumnThree />
        </div>
      </div>
    </>
  );
}

