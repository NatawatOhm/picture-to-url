import React, { useState } from "react";

const Main: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleInput = (e: any) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="text-3xl flex justify-center">
        <input type="file" onChange={handleInput} />
      </div>
      <img src={selectedImage} alt="" />
    </div>
  );
};

export default Main;
