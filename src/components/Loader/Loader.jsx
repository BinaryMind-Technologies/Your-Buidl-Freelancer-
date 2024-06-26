import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.form_Cont} sty>
      <div class={styles.loader}>
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0C63.6437 0 82 18.3563 82 41ZM12.7845 41C12.7845 56.583 25.417 69.2155 41 69.2155C56.583 69.2155 69.2155 56.583 69.2155 41C69.2155 25.417 56.583 12.7845 41 12.7845C25.417 12.7845 12.7845 25.417 12.7845 41Z"
            fill="url(#paint0_linear_414_653)"
          />
          <path
            d="M75.6077 41C79.1381 41 82.0509 38.1211 81.5027 34.6336C81.0008 31.4403 80.1218 28.3102 78.8791 25.31C76.8186 20.3356 73.7986 15.8158 69.9914 12.0086C66.1842 8.20142 61.6644 5.18138 56.69 3.12094C53.6898 1.87821 50.5597 0.999235 47.3664 0.4973C43.8789 -0.050889 41 2.86191 41 6.39225C41 9.92259 43.8976 12.7125 47.3377 13.5055C48.8578 13.8559 50.3497 14.3325 51.7976 14.9323C55.2209 16.3502 58.3313 18.4286 60.9514 21.0486C63.5714 23.6687 65.6498 26.7791 67.0677 30.2024C67.6675 31.6503 68.1441 33.1422 68.4945 34.6623C69.2875 38.1024 72.0774 41 75.6077 41Z"
            fill="#9747FF"
          />
          <defs>
            <linearGradient
              id="paint0_linear_414_653"
              x1="4.16186"
              y1="-8.2"
              x2="129.278"
              y2="26.0013"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#3D3D40" />
              <stop offset="1" stop-color="#0841D5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
