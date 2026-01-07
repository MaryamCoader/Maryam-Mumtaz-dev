"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            const timeout = setTimeout(() => {
                setReverse(false);
                setIndex((prev) => (prev + 1) % words.length);
            }, 100);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span className="inline-block min-h-[1.2em]">
            {words[index].substring(0, subIndex)}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 align-middle"
            />
        </span>
    );
}
