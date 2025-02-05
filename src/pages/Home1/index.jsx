import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Home1ColumnSix from "./Home1ColumnSix";
import Home1Row from "./Home1Row";
import Home1RowSeven from "./Home1RowSeven";
import Home1Rowseewhatour from "./Home1Rowseewhatour";
import Home1RowskillsOne from "./Home1RowskillsOne";
import Home1Rowwhatelsecani from "./Home1Rowwhatelsecani";
import Home1RowThree from "./Home1RowThree";
import Home1RowTwo from "./Home1RowTwo";
import Home1Rowexperiencea from "./Home1Rowexperiencea";
import React from "react";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>umurava-1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div className="flex flex-col items-center gap-[3.63rem] bg-[#ffffff] py-[1.50rem] sm:gap-[1.81rem] sm:py-[1.25rem]">
          <div className="container-xs md:px-[1.25rem]">
            <header className="flex items-center justify-between gap-[1.25rem] md:flex-col">
              <Img
                src="images/img_header_logo.png"
                alt="Headerlogo"
                className="h-[2.25rem] w-[7.75rem] object-contain"
              />
              <div className="flex w-[78%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col">
                <ul className="flex flex-wrap items-center gap-[2.25rem]">
                  <li>
                    <a href="#">
                      <Heading as="p" className="!font-['DM_Sans'] text-[0.88rem] font-medium !text-[#2b71f0]">
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
                        Challenge & Hackthons
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        as="p"
                        className="!font-['DM_Sans'] text-[0.88rem] font-medium !text-[#2b3338] hover:!text-[#2b71f0]"
                      >
                        For Educational Institutions
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        as="p"
                        className="!font-['DM_Sans'] text-[0.88rem] font-medium !text-[#2b3338] hover:!text-[#2b71f0]"
                      >
                        About Us
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        as="p"
                        className="!font-['DM_Sans'] text-[0.88rem] font-medium !text-[#2b3338] hover:!text-[#2b71f0]"
                      >
                        Contact Us{" "}
                      </Heading>
                    </a>
                  </li>
                </ul>
                <Button
                  color="gray_900_04"
                  size="5x1"
                  shape="square"
                  className="min-w-[9.75rem font-['DM_Sans'] font-semibold tracking-[0.00rem]"
                >
                  Join the program
                </Button>
              </div>
            </header>
          </div>
          <Home1Row />
        </div>
        <Home1Rowexperiencea />
        <div className="bg-[ffffff] py-[4.00rem] md:py-[1.25rem]">
          <Home1RowTwo />
        </div>
        <Home1RowskillsOne />
        <div className="bg-[ffffff] py-[4.00rem] md:py-[1.25rem]">
          <Home1ColumnSix />
        </div>
          <Home1Rowwhatelsecani />
          <Home1Rowseewhatour />
          <Home1RowThree />
          <Home1RowSeven />
          <Footer />
      </div>
    </>
  );
}