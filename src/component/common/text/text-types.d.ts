// TextVariants 모듈에서 직접 가져오기 위해 별도로 정의합니다.
import { VariantProps } from "some-variant-library"; // 적절한 라이브러리에서 가져오기
import { TextVariants } from "../path/to/your/text-variants-file"; // TextVariants 정의된 파일 경로

export module InputTypes {
  // WidthSizeVariants 타입 정의
  export type WidthSizeVariants = {
    widthSize: {
      fit: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      default: string;
    };
  };

  // WidthSizeKeys 타입 정의
  export type WidthSizeKeys = keyof WidthSizeVariants["widthSize"];

  // TextNativeProps 정의
  export interface TextNativeProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
      VariantProps<typeof TextVariants> {
    widthSize?: WidthSizeKeys;
  }

  // InputProps 타입 정의
  export type InputProps<T extends FieldValues> = UseControllerProps<T> & {
    placeholder?: string;
    className?: string;
    widthSize?: WidthSizeKeys;
  };
}
