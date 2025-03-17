import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Equipement } from "src/equipement/entities/equipement.entity";
import { Lessor } from "src/lessor/entities/lessor.entity";
import { Offre } from "src/offre/entities/offre.entity";
import { Picture } from "src/pictures/entities/picture.entity";
import { User } from "src/user/entities/user.entity";
import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, Decimal128, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
    
@Entity("house")
    
    export class House {
        @PrimaryGeneratedColumn()
            id: number;
            @Column("text",{name:"title",nullable:true})
            title: string;
            @Column("text",{name:"description",nullable:true})
            description: string;
            @Column("text",{name:"type",nullable:true})
            type: string;// type house
            @Column("text",{name:"location",nullable:true})
            location: string;
            @Column("text",{name:"city",nullable:true})
            city: string;
            @Column("text",{name:"poste_code",nullable:true})
            poste_code: number;
            @Column("text",{name:"price",nullable:true})
            price: Decimal128;
            @Column("text",{name:"availability",nullable:true})
            availability: Date;
            @Column("date",{name:"createdAt",nullable:true})
            created_at: Date;
            @Column("date",{name:"createdBy",nullable:true})
            created_by: number;
            @Column("date",{name:"updateAt",nullable:true})
            updated_at: Date;
            @Column("date",{name:"updateBy",nullable:true})
            updated_by: number;     
            @Column("date",{name:"deleted_at",nullable:true})
            deleted_at: Date;
            @Column("date",{name:"deleted_by",nullable:true})
            deleted_by: number;
            
            @OneToMany(() => Equipement, (equipment) => equipment.houseId, { cascade: true })
            equipments: Equipement[];
            @OneToMany(() => Characteristic, (characteristic) => characteristic.houseId, { cascade: true })
            characterisrtics: Characteristic[];
            @OneToMany(() => Picture, (picture) => picture.houseId, { cascade: true })
            pictures: Picture[];
            @OneToOne(() => Offre, (offre) => offre.houseId, { cascade: true })
            offreId: number


           @ManyToOne(() => Lessor, (lessor) => lessor.houses, { cascade: true })
            lessorId: number;
            @ManyToOne(() => User, (user) => user.houses, { cascade: true })
            userId: number;
            @BeforeInsert()
            datecreate(){
                this.created_at= new Date()
            }
    }