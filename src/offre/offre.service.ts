import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';
import { Offre } from './entities/offre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OffreService {
  
  constructor(
        @InjectRepository(Offre)
        private readonly offreRepository: Repository<Offre>,
      ) {}
    
      async create(offreData: CreateOffreDto) {
        let offre =  await this.offreRepository.create(offreData);
        console.log()
        return this.offreRepository.save(offre)  }
    
      async findAll() {
        return  this.offreRepository.findAndCount();
      }
    
      async findOne(id: number){
        return await this.offreRepository.findOne({ where: { id } });
      }
    
      async update(id: number, updateOffreDto:UpdateOffreDto) {
        let offre = await this.offreRepository.preload({
          id:+id,
          ...UpdateOffreDto
        })
       return this.offreRepository.save(offre)
      }
      delete(id: number) {
        this.offreRepository.delete(id)
      }
        
     
      
    }
    