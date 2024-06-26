"use client";
import Banner from "@/components/Banner/Banner";
import Steps from "@/components/steps/Steps";
import React, { useContext } from "react";

import { sharedState } from "../layout";
import FormFirstStep from "@/components/qrForms/FormFirstStep";

function page() {
  const styleBtn = {
    width: "164px",
    height: "40px",
    position: "absolute",
    top: "823px",
    left: "1170px",
    padding: "8px 18px",
    gap: "8px",
    borderRadius: "4px",
    backgroundColor: "var(--primary-color)",
    color: "var(--secondary-color)",
    fontSize: "16px",
    fontWeight: "600",
  };
  const stateRecived = useContext(sharedState);
  const { stateStep, setStateStep } = stateRecived;
  // const [step, setStep] = useState(0);
  const handleNext = () => {
    console.log(stateRecived);
    setStateStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <Banner
        text="Submit your project."
        image="/svgs/proj/BannerProduct.svg"
        widthImage="206"
        heightImage="206"
      />
      <Steps step={stateStep} />
      {stateStep === 0 && <FormFirstStep />}
      {stateStep === 1 && (
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "2rem",
            fontStyle: "italic",
            color: "#ddd",
          }}
        >
          Step 2
        </h2>
      )}
      {stateStep === 2 && (
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "2rem",
            fontStyle: "italic",
            color: "#ddd",
          }}
        >
          Step3
        </h2>
      )}
      <button style={styleBtn} onClick={handleNext}>
        {stateStep === 2 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default page;