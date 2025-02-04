import { Button, Img, Text, Heading } from "../../components";
import UserProfileSummary from "../../components/UserProfileSummary";
import React, { Suspense } from "react";

const data = [
  { completedChallengesLabel: "Completed Challenges", completedChallengesNumber: "05" },
  { completedChallengesLabel: "Open Challenges", completedChallengesNumber: "200" },
  { completedChallengesLabel: "Ongoing Challenges", completedChallengesNumber: "05" },
];

export default function HomepagedashboardRowline() {
  return (
    <div>
      <div className="flex flex-col gap-[2.13rem]">
        <div className="flex items-start justify-center sm:flex-col">
          <div className="mb-[1.25rem] flex flex-1 flex-col items-start gap-[0.25rem] sm:self-stretch sm:px-[1.25rem]">
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
          <Button
            size="9xl"
            leftIcon={<Img src="images/img_eye.svg" alt="Eye" className="h-[1.50rem] w-[1.50rem] object-contain" />}
            className="min-w-[10.13rem] gap-[0.50rem] self-end rounded-lg border border-solid border-[#2b71f0] px-[0.94rem] font-medium shadow-[0_1px_2px_0_#1018280c] sm:px-[1.25rem]"
          >
            View Profile
          </Button>
        </div>
        <div className="flex gap-[1.25rem] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfileSummary {...d} key={"listline" + index} />
            ))}
          </Suspense>
        </div>
      </div>
