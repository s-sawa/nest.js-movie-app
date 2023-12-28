import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsString() // 文字列のバリデーション
  @IsNotEmpty() // 1文字以上
  @MaxLength(40) // 40文字以内
  title: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;
  @IsInt() // 数値型のバリデーション
  @IsIn([1, 2, 3, 4, 5]) // 1-5のどれか
  @Type(() => Number) // 入力値を数値型に変換する(class-transformer)
  rating: number;
  @IsString()
  @IsNotEmpty()
  review: string;
}
