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
      className="hidden max-lg:block absolute -right-[50px] inset-y-0 bg-coral-red w-[230px] h-[290px] backdrop-blur-lg rounded-lg z-50 "
      variants={sidebar}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <MenuItem />
    </motion.div>
  );
};