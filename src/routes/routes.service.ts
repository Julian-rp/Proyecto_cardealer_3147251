import { Body, HttpCode, HttpException, Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {

  constructor(
    private readonly prisma: PrismaService
  ) {}
  

 async create( branDto: CreateRouteDto) {
  // Validación lógica (de negocio)
  // La marca ya existe
  // Si ya existe devolver un error
  let existe = await this.prisma.routes.findFirst({
    where: { plate: branDto.plate }
  });

  if (existe) {
    // Error: placa ya existe
    throw new HttpException({
      "exito": false,
      "mensaje": "la placa ya existe"
    }, 404)
  }
   else {
    // No existe la marca
    // se puede crear
    return await this.prisma.routes.create({
      data: {plate: branDto.plate,
        departure_time: branDto.departure_time, 
        arrival_time: branDto.arrival_time
      }
   });
  }
}
  
  findAll() {
    return this.prisma.routes.findMany({
      orderBy: { id_routes:'asc'}
    })
  }

  findOne(id: number) {
    return this.prisma.routes.findFirst({
      where:{id_routes: id}

    })
  }


  async update(id: number,
        body: any){
          return await this.prisma.routes.update({
            where: {id_routes: id},
            data: body
          });
        }
  

  async remove(id: number) {
    await this.prisma.routes.delete({
      where: { id_routes:id}
    })
    return{
      "exito": true,
      "mensaje" : "Eliminado correctamente ",
      "id": id
    }
  }
}
