import { Module } from '@nestjs/common';
import { EquipementService } from './equipement.service';
import { EquipementController } from './equipement.controller';
import { Equipement } from './entities/equipement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
@Module({
  controllers: [EquipementController],
  providers: [EquipementService],
  exports: [EquipementService],
  imports:[TypeOrmModule.forFeature([Equipement]),CloudinaryModule]
})
export class EquipementModule {}
