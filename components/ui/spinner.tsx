import type React from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const spinnerVariants = cva(
  'animate-spin rounded-full border-solid border-current border-r-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border-2',
        md: 'h-6 w-6 border-2',
        lg: 'h-8 w-8 border-2',
        xl: 'h-12 w-12 border-3',
      },
      variant: {
        default: 'text-white',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
        outline: 'text-muted-foreground',
        ghost: 'text-muted-foreground',
        white: 'text-white',
        blue: 'text-blue-600',
        green: 'text-green-600',
        red: 'text-red-600',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export function Spinner({
  className,
  size,
  variant,
  label,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(spinnerVariants({ size, variant }), className)}
      role='status'
      aria-label={label || 'Loading'}
      {...props}
    >
      <span className='sr-only'>{label || 'Loading...'}</span>
    </div>
  );
}
