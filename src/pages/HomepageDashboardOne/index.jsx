import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import HomepagedashboardoneColumnOne from "./HomepagedashboardoneColumnOne";
import HomepagedashboardColumnrecent from "./HomepagedashboardColumnrecent";
import React from "react";
export default function HomepageDashboardPage() {
    return (
        <>
<Helmet>
  <title>umurava-1</title>
  <meta name="description" content="Web site created using create-react-app" />

</Helmet>
<div className="flex w-full bg-[#f9f9fb]">
  <Sidebar1 />
  <div className="flex flex-1 flex-col gap-[1.50rem] bg-[#f9f9fb]">
    <Header />
    <div className="mx-[2.13rem] mb-[8.13rem] flex flex-col gap-[2.63rem] md:mx-0">
      <HomepagedashboardoneColumnOne />
      <HomepagedashboardColumnrecent />
    </div>
  </div>
</div>
</>
);
}
