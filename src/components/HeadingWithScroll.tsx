import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeadingProps {
    tag?: string,
    heading: string,
    description: string,
}

const HeadingWithScroll = ({ tag, heading, description }: HeadingProps) => {
    const headingRef = useRef(null);

    const { scrollYProgress: scrollYProgressHeading } = useScroll({
        target: headingRef,
        offset: ["start end", "end 70%"],
    });

    const opa = useTransform(scrollYProgressHeading, [0, 1], [0, 1]);
    const translateY = useTransform(scrollYProgressHeading, [0, 1], [100, 0]);
    
    return (
    <div className="overflow-hidden">
        <div className="section-heading" ref={headingRef}
        >
            {tag && 
            <motion.div className="flex justify-center"
                style={{
                    opacity: opa,
                    translateY
                }}
            >
                <div className="tag">{tag}</div>
            </motion.div>}
            <motion.h2 className="section-title mt-5"
                style={{
                    opacity: opa,
                    translateY
                }}
            >{heading}</motion.h2>
            <motion.p className="section-description mt-5"
                style={{
                    opacity: opa,
                    translateY
                }}
            >{description}</motion.p>
        </div>
    </div>
  )
}

export default HeadingWithScroll