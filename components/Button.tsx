"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  btnType,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 S{textStyles}`}>{title} </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="left arrow"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
