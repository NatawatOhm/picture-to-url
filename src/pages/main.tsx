import React, { useState } from "react";

const Main: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleInput = (e: any) => {
    setSelectedImage(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setImageUrl(objectUrl);
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <div className="text-3xl flex justify-center">
        <input type="file" onChange={handleInput} />
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Main;
