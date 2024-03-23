import React, { useEffect, useRef } from "react";
import "../styles/aboutModal.css";
import AboutSection from "./AboutSection";

interface AboutModalProps {
  handleModalClose: (name: string) => void;
  davidClicked: boolean;
  brandonClicked: boolean;
}

const AboutModal: React.FC<AboutModalProps> = ({
  davidClicked,
  brandonClicked,
  handleModalClose,
}) => {
  let isExpanded = davidClicked || brandonClicked;
  const expandingDivRef = useRef<HTMLDivElement>(null);
  let name: string = "";

  if (davidClicked) {
    name = "David Claphan";
  }
  if (brandonClicked) {
    name = "Brandon Arsenault";
  }

  // Ensure that the modal div scrolls back to the top between profile clicks
  useEffect(() => {
    if (isExpanded && expandingDivRef.current) {
      expandingDivRef.current.scrollTop = 0;
    }
  }, [isExpanded]);

  const handleExitButtonClick = () => {
    davidClicked ? handleModalClose("david") : handleModalClose("brandon");
  };

  return (
    <div
      className={`modal-wrapper ${isExpanded ? "expanded" : ""}`}
      onClick={handleExitButtonClick}
    >
      <div
        className={`expandingDiv ${isExpanded ? "expanded" : ""}`}
        ref={expandingDivRef}
      >
        {/* <button className="exit-button" onClick={handleExitButtonClick}>
          {" "}
          X{" "}
        </button> */}
        <AboutSection name={name} isExpanded={isExpanded} />
      </div>
    </div>
  );
};

export default AboutModal;
