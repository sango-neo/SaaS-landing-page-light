import { useInView, motion } from "framer-motion";
import { useRef } from "react";

interface HeadingProps {
    tag?: string,
    heading: string,
    description: string,
}

const SectionHeading = ({ tag, heading, description }: HeadingProps) => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { amount: 0.2});
    
    return (
    <div className="overflow-hidden">
        <div className="section-heading" ref={headingRef}
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s ease-in-out"
            }}
        >
            <motion.div className="flex justify-center"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.25
                }}
            >
                {tag && <div className="tag">{tag}</div>}
            </motion.div>
            <motion.h2 className="section-title mt-5"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.35
                }}
            >{heading}</motion.h2>
            <motion.p className="section-description mt-5"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.45
                }}
            >{description}</motion.p>
        </div>
    </div>
  )
}

export default SectionHeading