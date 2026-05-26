import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctors")
export class Doctors {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique:true})
    email: string

    @Column()
    name: string

    @Column({unique: true})
    crm: string

    @CreateDateColumn()
    createAt: Date

}