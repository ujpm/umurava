import { Img, Heading } from "../../components";
import HomepageDashboardChallengecard from "../../components/HomepageDashboardChallengecard";
import React, { Suspense } from "react";

export default function HomepagedashboardColumnrecent() {
  return (
    <div className="flex flex-col gap-[0.38rem]">
      <div className="mr-[0.38rem] flex items-center justify-between gap-[1.25rem] md:mr-0">
        <Heading size="heading3xl" as="h2" className="text-[1.13rem] font-semibold !text-[#101828]">
          Recent Challenges
        </Heading>
        <div className="flex items-center gap-[0.50rem] self-end rounded-lg">
          <a href="#">
            <Heading size="headingxs" as="h3" className="!font-['Inter'] text-[0.88rem] font-semibold !text-[#2b71f0]">
              See all
            </Heading>
          </a>
          <Img src="images/img_arrow_right.svg" alt="Arrowright" className="h-[1.25rem]" />
        </div>
      </div>
      <div className="mr-[0.38rem] flex gap-[1.13rem] md:mr-0 md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {[...Array(3)].map((d, index) => (
            <HomepageDashboardChallengecard key={"listopen" + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

