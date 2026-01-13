import { Transform } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  email: string;
  @IsString()
  // @Transform(({ value }) => value?.toUpperCase())
  name: string;
  @IsInt()
  age: number;
  @IsString()
  password: string;
}