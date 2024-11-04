// GlowingButton.tsx
import React, { useState, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowingButtonProps extends HTMLMotionProps<"button"> {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary"; //Button color variant
}

interface MousePosition {
  x: number;
  y: number;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  onClick,
  children,
  variant,
  ...motionProps
}) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const getVariantClasses = () => {
    console.log("Current variant:", variant); // Debug line
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-brand-primary to-brand-secondary text-white";
      case "secondary":
        return "";
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={` px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform relative overflow-hidden ${getVariantClasses()}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      {...motionProps}
    >
      {hovering && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "2px",
            height: "2px",
            background: "rgba(255, 255, 255, 0.55)",
            boxShadow: "0 0 30px 0.7rem rgba(255, 255, 255, 1)",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowingButton;
