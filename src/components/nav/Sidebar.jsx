import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
// import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItems";
import { sidebar } from "./NavVariants";

const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });
  // Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

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
      <motion.div  variants={sidebar} />
      <MenuItem/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

// className="absolute w-[300px] left-0 inset-y-0 bg-slate-400 -z-10"