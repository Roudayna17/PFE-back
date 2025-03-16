import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { House } from './entities/house.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [HouseController],
  providers: [HouseService],
  exports: [HouseService],
    imports:[TypeOrmModule.forFeature([House])]
})
export class HouseModule {}
