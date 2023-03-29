import { Contains, IsDefined, IsInt, IsOptional, Matches } from "class-validator";

export class CreateAccountDto {
    @IsDefined({message: "A számlaszámot kötelezően ki kell tölteni!"})
    @Contains("-",{message: "A számlaszámnak minimum egy kötőjelet kell tartalmaznia!"})
    @Matches(/[0-9-]/,{message: "A számlaszám csak számot illetve kötőjelet tartalmazhat!"})
    accountNumber: String;

    //Alapértelmezett 0 (az entity-ben)
    @IsOptional()
    @IsInt({message: "Az egyenleg csak szám lehet!"})
    balance: number;
}
