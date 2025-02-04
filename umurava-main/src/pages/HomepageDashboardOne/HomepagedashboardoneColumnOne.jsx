import { Text, Heading } from "../../components";
import UserDashboard from "../../components/UserDashboard";
import UserDashboard1 from "../../components/UserDashboard1";
import React, { Suspense } from "react";

const data = [
  { completedChallengesText: "Completed Challenges", completedChallengesCount: "5,837", challengesButton: "15%" },
  { completedChallengesText: "Open  Challenges", completedChallengesCount: "5,837", challengesButton: "15%" },
  { completedChallengesText: "Ongoing Challenges", completedChallengesCount: "5,837", challengesButton: "15%" },
];

export default function HomepagedashboardoneColumnOne() {
  return (
    <div className="mt-[1.50rem] flex flex-col gap-[2.75rem] px-[2.25rem] sm:px-[1.25rem]">
      <div className="flex flex-col items-start gap-[0.25rem]">
        <Heading
          size="heading6xl"
          as="h1"
          className="text-[1.50rem] font-semibold tracking-[0.00rem] !text-[#000000] md:text-[1.38rem]"
        >
          Welcome back Hilaire,
        </Heading>
        <Text as="p" className="text-[1.00rem] font-normal">
          Build Work Experience through Skills Challenges
        </Text>
      </div>
      <div className="flex flex-col gap-[1.00rem]">
        <div className="flex gap-[1.00rem] md:flex-col">
          <UserDashboard />
          <UserDashboard />
        </div>
        <div className="flex gap-[1.00rem] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserDashboard1 {...d} key={"listduration" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

