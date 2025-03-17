import { House } from 'src/house/entities/house.entity';
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn } from 'typeorm';

@Entity('offre')
export class Offre {
    @PrimaryGeneratedColumn()
        id: number;
        @Column("text",{name:"title",nullable:true})
        title: string;
        @Column("text",{name:"description",nullable:true})
        description: string;
        @Column("text",{name:"TVA",nullable:true})
        TVA: number;
        @Column("text",{name:"PrixHorsTaxe",nullable:true})
        PrixHorsTaxe: number;
        @Column("text",{name:"PriceTTC",nullable:true})
        PriceTTC: number;
        @Column("date",{name:"createdAt",nullable:true})
        created_at: Date;
        @Column("int",{name:"createdBy",nullable:true})
        created_by: number;
        @Column("date",{name:"updateAt",nullable:true})
        updated_at: Date;
        @Column("int",{name:"updateBy",nullable:true})
        updated_by: number; 
        @Column("date",{name:"deleted_at",nullable:true})
        deleted_at: Date;
        @Column("int",{name:"deleted_by",nullable:true})
        deleted_by: number;
        @OneToOne(() => House, (house) => house.offreId, )
        @JoinColumn()
        houseId: number
        @BeforeInsert()
        setCreateDate() {
          this.created_at = new Date();
          this.updated_at = new Date();
        }
      
        @BeforeUpdate()
        setUpdateDate() {
          this.updated_at = new Date();
        }
    
    
    
}
