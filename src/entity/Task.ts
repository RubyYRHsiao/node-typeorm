import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20,
    })
    name: string;

    @Column()
    isCompleted: boolean;
}