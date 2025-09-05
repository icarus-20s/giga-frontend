import React from "react";

const Loader = ({ size = 48 }) => {
  const colors = ["#06D001", "#9BEC00", "#F3FF90", "#059212"]; // colorful segments

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-full border-t-4 border-b-4 animate-spin"
            style={{
              borderColor: `${color} transparent`,
              animationDelay: `${index * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
