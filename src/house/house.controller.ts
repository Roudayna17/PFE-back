import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { House } from './entities/house.entity';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post('create-house')
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.create(createHouseDto);
  }

  @Get('list-house')
  findAll() {
    console.log('✅ Endpoint GET /houses/list-houses appelé');
    return this.houseService.findAll();
  }

  @Get('detail-house/:id')
  findOne(@Param('id') id: string) {
    return this.houseService.findOne(+id);
  }

  @Patch('update-house/:id')
  update(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto) {
    return this.houseService.update(+id, updateHouseDto);
  }

  @Delete('delete-house/:id')
  remove(@Param('id') id: string) {
    return this.houseService.delete(+id);
  }
}
