import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Section({ id }: { id: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
      <section>
        <div ref={ref}>
          <img src={`/${id}.jpg`} alt="A London skyscraper" />
        </div>
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      </section>
    );
  }