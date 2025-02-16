"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MenuBar } from "./menu-bar";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                className="md:hidden p-2 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-12 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 w-[90%] max-w-[320px] max-h-[80vh] overflow-y-auto z-50"
                >
                    <MenuBar />
                </motion.div>
            )}
        </div>
    );
}
