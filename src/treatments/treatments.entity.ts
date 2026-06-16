import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("treatments")
export class Treatments{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @CreateDateColumn()
    createAt: Date
}