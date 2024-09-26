import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItems";
import { sidebar } from "./NavVariants";

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="hidden max-lg:block fixed right-8 top-5 bg-coral-red/25 w-[230px] h-[290px] backdrop-blur-sm rounded-lg z-50 "
      variants={sidebar}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <MenuItem />
    </motion.div>
  );
};