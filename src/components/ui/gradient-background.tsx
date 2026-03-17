'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  // Animation customization
  gradients?: string[];
  animationDuration?: number;
  animationDelay?: number;

  // Layout customization
  enableCenterContent?: boolean;
  contentClassName?: string;
  /** When false, gradient only wraps content height (e.g. hero only), not full screen */
  fullPage?: boolean;

  // Visual customization
  overlay?: boolean;
  overlayOpacity?: number;
};

const Default_Gradients = [
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
  'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
  'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
];

/** Gradients using palette: #E9D5FF, #FFEDD5, #DBEAFE */
export const ABOUT_PAGE_GRADIENTS = [
  'linear-gradient(135deg, #E9D5FF 0%, #FFEDD5 50%, #DBEAFE 100%)',
  'linear-gradient(135deg, #FFEDD5 0%, #DBEAFE 50%, #E9D5FF 100%)',
  'linear-gradient(135deg, #DBEAFE 0%, #E9D5FF 50%, #FFEDD5 100%)',
  'linear-gradient(135deg, #E9D5FF 0%, #DBEAFE 100%)',
  'linear-gradient(135deg, #FFEDD5 0%, #E9D5FF 100%)',
];

export function GradientBackground({
  children,
  className = '',
  gradients = Default_Gradients,
  animationDuration = 8,
  animationDelay = 0.5,
  enableCenterContent = true,
  contentClassName,
  fullPage = true,
  overlay = false,
  overlayOpacity = 0.3,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        'w-full relative overflow-hidden',
        fullPage ? 'min-h-screen' : 'min-h-0',
        className,
      )}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content wrapper */}
      {children && (
        <div
          className={cn(
            'relative z-10 flex',
            fullPage && 'min-h-screen',
            enableCenterContent
              ? 'items-center justify-center'
              : 'items-start justify-center',
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
