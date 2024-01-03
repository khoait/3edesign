import { H6 } from "@components/typography";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import type { Variant } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ElementState } from "~/hooks/use-element-state";
import { useElementState } from "~/hooks/use-element-state";

type ArrowDirection = "up" | "down" | "left" | "right";

const arrowVariants: Record<ArrowDirection, Record<ElementState, Variant>> = {
  down: {
    initial: { y: 0 },
    hover: { y: 4 },
    focus: {
      y: [0, 4, 0],
      transition: { repeat: Infinity },
    },
    active: { y: 12 },
  },
  up: {
    initial: { y: 0 },
    hover: { y: -4 },
    focus: {
      y: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { y: -12 },
  },
  left: {
    initial: { x: 0 },
    hover: { x: -4 },
    focus: {
      x: [0, -4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: -12 },
  },
  right: {
    initial: { x: 0 },
    hover: { x: 4 },
    focus: {
      x: [0, 4, 0],
      transition: { repeat: Infinity },
    },
    active: { x: 12 },
  },
};

type ArrowButtonBaseProps = {
  direction?: ArrowDirection;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  textSize?: "small" | "medium";
};

type ArrowLinkProps = {
  direction?: ArrowDirection;
  href?: string;
} & ArrowButtonBaseProps;

function getBaseProps({ textSize, className }: ArrowButtonBaseProps) {
  return {
    className: clsx(
      "text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition",
      {
        "text-xl": textSize === "medium",
        "text-lg": textSize === "small",
      },
      className,
    ),
  };
}

function ArrowButtonContent({
  children,
  direction = "right",
}: Pick<ArrowButtonBaseProps, "children" | "direction">) {
  const circumference = 28 * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {children && (direction === "right" || direction === "up") ? (
        <span className="mr-8 text-xl font-medium">{children}</span>
      ) : null}

      <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
        <div className="absolute text-gray-200 dark:text-gray-600">
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            />

            <motion.circle
              className="text-primary"
              stroke="var(--color-primary)"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              style={{ strokeDasharray, rotate: -90 }}
              variants={{
                initial: { strokeDashoffset: circumference },
                hover: { strokeDashoffset: 0 },
                focus: { strokeDashoffset: 0 },
                active: { strokeDashoffset: 0 },
              }}
              transition={{
                damping: 0,
                ...(shouldReduceMotion ? { duration: 0 } : null),
              }}
            />
          </svg>
        </div>

        <motion.span
          transition={shouldReduceMotion ? { duration: 0 } : {}}
          variants={shouldReduceMotion ? {} : arrowVariants[direction]}>
          <Icon
            icon={`tabler:arrow-narrow-${direction}`}
            width="24"
            height="24"
          />
        </motion.span>
      </div>

      {children && (direction === "left" || direction === "down") ? (
        <span className="ml-8 text-xl font-medium">{children}</span>
      ) : null}
    </>
  );
}

function ArrowLink({ href, ...props }: ArrowLinkProps) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  if (href) {
    return (
      <motion.a
        href={href}
        {...getBaseProps(props)}
        ref={ref}
        animate={state}
        transition={shouldReduceMotion ? { duration: 0 } : {}}>
        <ArrowButtonContent {...props} />
      </motion.a>
    );
  }

  throw new Error("Must provide either href to ArrowLink");
}

function BackLink({
  href,
  className,
  children,
}: Pick<ArrowLinkProps, "href" | "className" | "children">) {
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={clsx(
        "text-primary flex space-x-4 focus:outline-none",
        className,
      )}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? { duration: 0 } : {}}>
      <motion.span
        className="inline-flex items-center justify-center"
        variants={shouldReduceMotion ? {} : arrowVariants.left}
        transition={shouldReduceMotion ? { duration: 0 } : {}}>
        <Icon icon={`tabler:arrow-narrow-left`} width="24" height="24" />
      </motion.span>
      <H6 as="span">{children}</H6>
    </motion.a>
  );
}

export { ArrowLink, BackLink };
