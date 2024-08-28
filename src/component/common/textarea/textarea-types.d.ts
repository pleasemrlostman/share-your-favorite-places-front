import { VariantProps } from "class-variance-authority";

export module TextareaTypes {

  // Variants 타입
  export type Variants = {
    variant: {
      default: string;
      gray: string;
    }
    size: {
      default: string;
      fit: string;
      sm: string;
      md: string;
      lg: string;
    }
  }

  // Variants 키 타입 
  export type VariantKeys = keyof Variants['variant']
  export type SizeKeys = keyof Variants['size']

  // TextareaWithHookFormProps 타입
  export type TextareaProps<T extends FieldValues> = UseControllerProps<T> & {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: VariantKeys;
  }

  // TextareaProps 타입
  export interface TextNativeProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: VariantKeys;
    size?: SizeKeys;
  }
}