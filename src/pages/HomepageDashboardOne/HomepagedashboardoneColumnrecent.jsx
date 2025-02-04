import { Img, Heading } from "../../components";
import HomepageDashboardOneChallengecard from "../../components/HomepageDashboardOneChallengecard";
import React, { Suspense } from "react";

export default function HomepagedashboardoneColumnrecent() {
  return (
    <div className="mb-[0.25rem] mt-[2.88rem] flex flex-col gap-[1.50rem] px-[2.13rem] sm:px-[1.25rem]">
      <div className="flex items-center justify-between gap-[1.25rem]">
        <Heading size="heading3xl" as="h2" className="self-end text-[1.13rem] font-semibold !text-[#101828]">
          Recent Challenges
        </Heading>
        <div className="flex gap-[0.38rem] rounded-md">
          <a href="#">
            <Heading size="headingxs" as="h3" className="!font-['Inter'] text-[0.88rem] font-semibold !text-[#2b71f0]">
              See all
            </Heading>
          </a>
          <Img src="images/img_arrow_right_blue_a400.png" alt="Arrowright" className="h-[1.00rem] object-cover" />
        </div>
      </div>
      <div className="flex gap-[1.63rem] md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {[...Array(3)].map((d, index) => (
            <HomepageDashboardOneChallengecard key={"listopen" + index} className="w-[32%] md:w-full" />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

