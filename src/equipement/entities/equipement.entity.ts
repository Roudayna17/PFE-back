import { House } from 'src/house/entities/house.entity';
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from 'typeorm';

@Entity('equipement')
export class Equipement {
  @PrimaryGeneratedColumn()
  id: number;
        @Column("text",{name:"title",nullable:true})
        @Column("text",{name:"condition",nullable:true})
        condition: string;
        @Column("text",{name:"quantity",nullable:true})
        quantity: number;
        @Column("text",{name:"isavaible",nullable:true})
        isavaible: boolean;
        @Column("text",{name:"description",nullable:true})
        description: string;
        @Column("text",{name:"active",nullable:true})
        active: boolean;
        @Column('text', { name: 'image', nullable: true })
        image: string;
     
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
        @ManyToOne(() => House, (house) => house.equipments, { onDelete: 'CASCADE' })
        @JoinColumn({ name: 'houseId' })
        houseId: number;
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