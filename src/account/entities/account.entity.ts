import Owner from "src/owner/entities/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountNumber: String;

    @Column( { default: 0 } )
    balance: number;

    @ManyToOne(() => Owner, (owner) => owner.accounts)
    owner!: Owner;

}