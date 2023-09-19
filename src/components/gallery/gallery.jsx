import React from "react";
import "./gallery.css";

function Gallery() {
  const images = [
    "https://media.istockphoto.com/id/1171764854/video/bridegroom-exchanging-wedding-ring-with-bride.jpg?s=640x640&k=20&c=j5BojQPa3JHSVUSOvzlxV2elWv9ccRNHlI983-h1JBo=",
    "https://media.istockphoto.com/id/1171775505/video/happy-married-couple-kissing-while-leaving-church.jpg?s=640x640&k=20&c=cJXfhzzCxDzkn3NsnekRuXR-Yhyw5e9sQqIM-EVu2-E=",
    "https://media.istockphoto.com/id/1190832432/video/heres-to-new-beginnings.jpg?s=640x640&k=20&c=EI4JLPZCgnhbzuWEM2NY8PhAiaEwi06N7iZLeFLQq9c=",
    "https://st4.depositphotos.com/13458514/19884/v/600/depositphotos_198844512-stock-video-newlyweds-exchange-rings-wedding-ceremony.jpg",
    "https://st2.depositphotos.com/3863641/10073/v/600/depositphotos_100739362-stock-video-beautiful-wedding-couple-in-forest.jpg",
    "https://elements-video-cover-images-0.imgix.net/files/d862eb0c-8b9c-4ec1-b6ca-0f0fc66e9f1f/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=281&w=500&s=9c2a130f7d3d8562f8b1095e2b4dc5b1",
    "https://media.istockphoto.com/id/1190832024/video/until-death-do-us-part.jpg?s=640x640&k=20&c=ZGcGF1oqBdie46aPr2G86TAKbnEdkVPvfsTmXppXVAk=",
    "https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=",
    "https://cdn.stocksnap.io/img-thumbs/280h/marriage-wedding_JB4CPU0LCU.jpg",
    "https://media.istockphoto.com/id/1308551184/video/african-american-couple-in-love-getting-married-looking-at-each-other-on-the-beach-at-sunset.jpg?s=640x640&k=20&c=d081taQIpj4jd-wn3WR2UX65uDDAIyCIZab_1qY6DwI=",
    "https://media.gettyimages.com/id/1190832117/video/i-could-stare-into-these-eyes-forever.jpg?s=640x640&k=20&c=h57ITgC7aI9GVALJdI5qbDuyMsW1i9YOD-zm6g2M1JQ=",
    "https://www.shutterstock.com/shutterstock/videos/1069790917/thumb/1.jpg?ip=x480",
    "https://www.shutterstock.com/shutterstock/videos/1069790434/thumb/1.jpg?ip=x480",
    "https://media.gettyimages.com/id/1179053130/video/bride-and-groom-kissing-in-the-altar.jpg?s=640x640&k=20&c=5zoIAgNXVHHhW8SZSJCxTuxeh-4LZuuI6rNxjIbD4t0=",
    "https://media.istockphoto.com/id/1190832404/video/nothing-fancy-just-love.jpg?s=640x640&k=20&c=Azrlnsc6YfSnDE7eNHNnxZsukMuavslnDIKStXCsQhM=",
  ];

  return (
    <>
     <div className="gallery-container">
        <h1>Capturing Wedding Dreams</h1>
        <div className="gallery-text-container">
          <p>
           When we meet, we will provide you with a
            variety of natural locations to consider. Rest assured,
            we will ensure that the chosen backdrop perfectly complements the
            atmosphere you have in mind.
          </p>
        </div>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <div className="card">
              <img src={image} alt={`Image ${index}`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
