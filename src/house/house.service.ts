import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { House } from './entities/house.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HouseService {
   constructor(
      @InjectRepository(House)
      private readonly houseRepository: Repository<House>,
    ) {}
  
    async create(houseData: CreateHouseDto) {
      let house =  await this.houseRepository.create(houseData);
      console.log(house)
      return this.houseRepository.save(house)  }
  
    async findAll() {
      return  this.houseRepository.findAndCount({relations:["userId","offreId","pictures","characterisrtics","equipments"]});
    }
  
    async findOne(id: number){
      return await this.houseRepository.findOne({ where: { id } });
    }
  
    async update(id: number, updateHouseDto:UpdateHouseDto) {
      let house = await this.houseRepository.preload({
        id:+id,
        ...UpdateHouseDto
      })
     return this.houseRepository.save(house)
    }
    delete(id: number) {
      this.houseRepository.delete(id)
    }
      
   
    
  }
  