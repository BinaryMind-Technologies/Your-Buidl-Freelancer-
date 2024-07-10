"use client";
import React from "react";
import styled from "./Banner.module.css";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
function Banner({ text, image, heightImage, widthImage }) {
  const pathName = usePathname();
  /***if this image have special width or height ***/
  const style = widthImage &&
    heightImage && {
      width: widthImage + "px",
      height: heightImage + "px",
      marginTop: "-4px",
    };
  return (
    <div className={styled.main_Cont_Banner}>
      <div className={styled.banner__cont}>
        <h1>{text}</h1>
        <img src={image} alt="bannerImage" style={style} />
      </div>

      {pathName === "/projects" && (
        <div className={styled.btns_cont}>
          <Button
            type="link"
            path="../qfrounds"
            color="var(--secondary-color)"
            text="Submit a Project"
            textColor="var(--primary-color)"
          />
        </div>
      )}
    </div>
  );
}

export default Banner;
