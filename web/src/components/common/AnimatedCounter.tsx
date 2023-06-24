import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { CounterText, CounterTextSmall } from "@styles/common/Animation";

export default function Counter({
  value,
  direction = "up",
  suffix = "",
  isMobileText,
}: {
  value: number;
  direction?: "up" | "down";
  suffix?: string;
  isMobileText?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent =
            Intl.NumberFormat("en-US").format(latest.toFixed(0)) + suffix;
        }
      }),
    [springValue]
  );

  return isMobileText ? (
    <CounterTextSmall ref={ref} />
  ) : (
    <CounterText ref={ref} />
  );
}
