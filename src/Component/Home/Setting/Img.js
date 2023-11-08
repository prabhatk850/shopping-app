
import React  from "react";

const Img = ({setUploadImg}) => {
  return (
    <div>

      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setUploadImg(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default  Img;