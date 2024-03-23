import React, { useState } from "react";
import "../styles/aboutPage.css";
import brandonImage from "../assets/BArsenault.jpg";
import davidImage from "../assets/DClaphan.jpg";
import AboutModal from "../components/aboutModal";

interface AboutPageProps {
  handleModalClick: () => void;
}

const AboutPage = ({ handleModalClick }: AboutPageProps) => {
  const [davidClick, setDavidClick] = useState<boolean>(false);
  const [brandonClick, setBrandonClick] = useState<boolean>(false);

  const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    handleModalClick();
    event.currentTarget.id.includes("david")
      ? setDavidClick(true)
      : setBrandonClick(true);
  };

  const handleModalClose = (name: string) => {
    name === "david" ? setDavidClick(false) : setBrandonClick(false);
    handleModalClick();
  };

  return (
    <div id="about-outer-div">
      <div className="about-individual">
        <div
          id={`avatar-david${davidClick ? "-clicked" : ""}`}
          className="avatar-div"
          onClick={handleAvatarClick}
        >
          <img className="circular-avatar-image" src={davidImage} alt="David" />
        </div>
      </div>

      <AboutModal
        davidClicked={davidClick}
        brandonClicked={brandonClick}
        handleModalClose={handleModalClose}
      />

      <div className="about-individual">
        <div
          id={`avatar-brandon${brandonClick ? "-clicked" : ""}`}
          className="avatar-div"
          onClick={handleAvatarClick}
        >
          <img
            className="circular-avatar-image"
            src={brandonImage}
            alt="Brandon"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
