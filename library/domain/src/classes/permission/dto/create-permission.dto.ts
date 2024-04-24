import { IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  code: string;

  @IsString()
  displayName: string;
}
