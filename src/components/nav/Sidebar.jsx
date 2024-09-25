import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItems";
import { sidebar } from "./NavVariants";

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="hidden max-lg:block absolute right-0 inset-y-0"
    >
      <motion.div className="absolute -top-[14px] -right-[11px] bottom-0 -z-20 bg-slate-700 w-12 rounded-full h-12 " variants={sidebar} />
      <MenuItem/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};