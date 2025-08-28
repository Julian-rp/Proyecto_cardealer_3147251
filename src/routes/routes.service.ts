import { Body, Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {

  constructor(
    private readonly prisma: PrismaService
  ) {}
  

  create(body: any) {
    return this.prisma.routes.create({
      data: body
    })
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
