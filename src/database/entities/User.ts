import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm';


@Entity("users")
class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @CreateDateColumn()
    create_ap:Date

    @UpdateDateColumn()
    update_ap:Date

}

export { User } ;