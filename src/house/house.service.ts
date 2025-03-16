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
        console.log('Fetching houses from DB...');
        return this.houseRepository.findAndCount({relations: ['equipments', 'characterisrtics','pictures']});
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
      
   
    async removeMultiple(toDelete: number[]) {   
    
      let resultDelete: boolean = null
      let resultDisable: boolean = null
      const allIntegers = toDelete.every(item => Number.isInteger(item));
    if (!allIntegers) {
      console.log('Invalid data in toDelete array');
      // Handle the error appropriately
      return;
    }
    
      if (toDelete.length != 0) {
        if (await this.houseRepository.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
          console.log("unitsResposity",this.houseRepository)
      }
    
    return true 
    }
    
  }
   