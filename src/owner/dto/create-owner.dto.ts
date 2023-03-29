import { Contains, IsDefined, IsNotEmpty, IsOptional, Matches } from "class-validator";

export class CreateOwnerDto {
    @Contains(" ",{message: "A névnek minimum egy szóközt kell tartalmaznia!"})
    @IsDefined({message: "A nevet kötelezően ki kell tölteni!"})
    @Matches(/[a-zA-Z ]/,{message: "A név csak betűket és szóközt tartalmazhat!"})
    fullName: String;

    @IsOptional()
    buissness: boolean;
}
