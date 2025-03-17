import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OffreService } from './offre.service';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';

@Controller('offre')
export class OffreController {
  constructor(private readonly offreService: OffreService) {}

  @Post('create-offre')
  create(@Body() createOffreDto: CreateOffreDto) {
    return this.offreService.create(createOffreDto);
  }

  @Get('list-offre')
  findAll() {
    return this.offreService.findAll();
  }

  @Get('detail-offre/:id')
  findOne(@Param('id') id: string) {
    return this.offreService.findOne(+id);
  }

  @Patch('update-offre/:id')
  update(@Param('id') id: string, @Body() updateOffreDto: UpdateOffreDto) {
    return this.offreService.update(+id, updateOffreDto);
  }

  @Delete('delete-offre/:id')
  remove(@Param('id') id: string) {
    return this.offreService.delete(+id);
  }
}
