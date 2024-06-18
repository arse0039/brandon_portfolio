import React, { useEffect, useRef } from "react";
import "../styles/aboutModal.css";
import AboutSection from "./AboutSection";

interface AboutModalProps {
  handleModalClose: () => void;
  brandonClicked: boolean;
}

const AboutModal: React.FC<AboutModalProps> = ({
  brandonClicked,
  handleModalClose,
}) => {
  let isExpanded = brandonClicked;
  const expandingDivRef = useRef<HTMLDivElement>(null);
  let name: string = "Brandon Arsenault";

  // Ensure that the modal div scrolls back to the top between profile clicks
  useEffect(() => {
    if (isExpanded && expandingDivRef.current) {
      expandingDivRef.current.scrollTop = 0;
    }
  }, [isExpanded]);

  const handleExitButtonClick = () => {
    name = "";
    handleModalClose();
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
        <AboutSection name={name} isExpanded={isExpanded} />
      </div>
    </div>
  );
};

export default AboutModal;
