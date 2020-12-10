import React from "react";
import "./admin.scss";

import { motion } from "framer-motion";

export const Admin = () => {
  return (
    <motion.div
      id="admin"
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      admin
    </motion.div>
  );
};
