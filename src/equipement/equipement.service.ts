import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipement } from './entities/equipement.entity';
import { CreateEquipementDto } from './dto/create-equipement.dto';
import { UpdateEquipementDto } from './dto/update-equipement.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class EquipementService {
  constructor(
    @InjectRepository(Equipement)
    private readonly equipementRepository: Repository<Equipement>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(createEquipementDto: CreateEquipementDto, file: Express.Multer.File) {
    // Upload de l'image sur Cloudinary
    const imageUrl = await this.cloudinaryService.uploadImage(file);

    // Créez l'équipement avec l'URL de l'image
    const equipement = this.equipementRepository.create({
      ...createEquipementDto,
      image: imageUrl, // Ajoutez l'URL de l'image
      created_at: new Date(),
      updated_at: new Date(),
    });

    return await this.equipementRepository.save(equipement);
  }

  

  async findOne(id: number) {
    return await this.equipementRepository.findOne({ where: { id } });
  }

  
  async findAll() {
    return await this.equipementRepository.find();
  }
  
  async update(
    id: number,
    updateEquipementDto: UpdateEquipementDto,
    file?: Express.Multer.File, // Fichier image optionnel
  ) {
    const equipement = await this.equipementRepository.findOne({ where: { id } });
  
    if (!equipement) {
      throw new Error('Équipement non trouvé');
    }
  
    // Si une nouvelle image est fournie, uploader sur Cloudinary
    if (file) {
      const imageUrl = await this.cloudinaryService.uploadImage(file);
      equipement.image = imageUrl; // Mettre à jour l'URL de l'image
    }
  
    // Mettre à jour les autres champs
    Object.assign(equipement, updateEquipementDto);
    equipement.updated_at = new Date();
  
    return this.equipementRepository.save(equipement);
  }
  
async remove(id: number) {
  return this.equipementRepository.delete(id);
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
    if (await this.equipementRepository.delete(toDelete)) {
      resultDelete = true
    } else
      resultDelete = false
      console.log("unitsResposity",this.equipementRepository)
  }

return true 
}

}
