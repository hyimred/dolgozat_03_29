import { PartialType } from '@nestjs/mapped-types';
import { Contains, Matches } from 'class-validator';
import { IsOptional } from 'class-validator';
import { CreateOwnerDto } from './create-owner.dto';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
    @Contains(" ",{message: "A névnek minimum egy szóközt kell tartalmaznia!"})
    @IsOptional()
    @Matches(/[a-zA-Z ]/,{message: "A név csak betűket és szóközt tartalmazhat!"})
    fullName: String;

    @IsOptional()
    buissness: boolean;
}
