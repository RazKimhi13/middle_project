import React, { useContext, useState } from "react";
import "./stepTwo.css";
import { UserContext } from "../../../../context/userContext";

function StepTwo({setPage, page}) {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const images = [
    "https://i0.wp.com/suessmoments.com/wp-content/uploads/sites/10014/2023/02/website-shadowbrook-nj-wedding-photos-7153-photography-by-SUESS-MOMENTS.jpg?fit=2560%2C1703&ssl=1",
    "https://cdn0.hitched.co.uk/article/1348/3_2/960/jpg/128431-brinsop-court-manor-house-and-and-barn-top-wedding-venues-2022.jpeg",
    "https://d194ip2226q57d.cloudfront.net/original_images/FinleyFarms_NewVenues_Winter.JPG",
    "https://www.sa-venues.com/visit/thegardenvenue/08g.jpg",
    "https://assets.venuecrew.com/wp-content/uploads/2022/08/01233727/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg",
    "https://www.theknot.com/tk-media/images/f4b9e7f6-d195-47d9-99c1-279ca9c2fee7",
    "https://nicolevallancephotography.com/wp-content/uploads/2020/12/windsorweddingvenues.jpg",
    "https://jenniferbergmanweddings.com/wp-content/uploads/2022/03/sparrow-lane-1.jpg",
    "https://www.kempinski.com/var/site/storage/images/3/5/8/8/708853-1-eng-GB/2de47e8c47de-74521877_4K.jpg",
  ];

  return (
    <>
      <div className="step-two-container">
        <div className="form-title">
          <h1>Select your dream venue</h1>
        </div>
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className="image-gallery-item">
              <div className="image-card">
                <img
                  onClick={() => {
                    const updatedUser = { ...loggedUser };
                    updatedUser.venue = image;
                    setLoggedUser(updatedUser);
                    console.log(updatedUser);
                    alert("Venue updated!");
                    setPage((currPage) => currPage + 1);
                  }}
                  src={image}
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StepTwo;
