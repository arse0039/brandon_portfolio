import React, { useEffect, useRef, Dispatch, SetStateAction } from "react";
import "../styles/aboutModal.css";
import AboutSection from "./AboutSection";

interface AboutModalProps {
  handleModalClose: () => void;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  brandonClicked: boolean;
  isExpanded: boolean;
}

const AboutModal: React.FC<AboutModalProps> = ({
  brandonClicked,
  isExpanded,
  setIsExpanded,
  handleModalClose,
}) => {

  const expandingDivRef = useRef<HTMLDivElement>(null);
  let name: string = "Brandon Arsenault";

  // Ensure that the modal div scrolls back to the top between profile clicks
  useEffect(() => {
    if (brandonClicked && expandingDivRef.current) {
      expandingDivRef.current.scrollTop = 0;
    }
  }, [brandonClicked]);

  const handleExitButtonClick = () => {
    name = "";
    handleModalClose();
    setTimeout(() => {
      setIsExpanded(false); 
    }, 400);
  };

  return (
    <div
      className={`modal-wrapper ${isExpanded ? "expanded" : ""}`}
      onClick={handleExitButtonClick}
    >
      <div
        className={`expandingDiv ${brandonClicked ? "expanded" : ""}`}
        ref={expandingDivRef}
      >
        <AboutSection name={name} isExpanded={brandonClicked} />
      </div>
    </div>
  );
};

export default AboutModal;
