import Account from "src/account/entities/account.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Owner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: String;

    @Column( { default: false } )
    business: boolean;

    @OneToMany(() => Account, (account) => account.owner)
    accounts!: Account[]
}