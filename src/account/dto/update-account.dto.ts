import { PartialType } from '@nestjs/mapped-types';
import { Contains, IsInt, IsOptional, Matches } from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
    @IsOptional()
    @Contains("-",{message: "A számlaszámnak minimum egy kötőjelet kell tartalmaznia!"})
    @Matches(/[0-9-]/,{message: "A számlaszám csak számot illetve kötőjelet tartalmazhat!"})
    accountNumber: String;

    @IsOptional()
    @IsInt({message: "Az egyenleg csak szám lehet!"})
    balance: number;
}
