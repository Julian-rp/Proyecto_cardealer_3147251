import { Controller, Get, Patch, Post, Delete, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController {
// endpoint:
// destino de la request, se escribe como funcion en una clase controlador

  @Get()
  consultarCarros(): string {
    return "aqui se podran consultar todos los carros"
  }

  @Get(":id")
  consultarCarroPorId(@Param("id") id:string){
    return `aqui se va a consultar carro con id:${id}`
  }

  @Post()
  crearCarro(): string{
    return "aqui se podra registrar el carro"
  }

  @Patch()
  actualizarCarros(): string{
    return "aqui se actualizara el carro "
  }

  @Patch(":id")
  actualizarCarrosPorId(@Param("id") id:string): string{
    return `aqui se actualizara el carro cuyo id es:${id}`
  }

  @Delete()
  eliminarCarros(): string{
    return "aqui se eliminara el carro"
  }

  @Delete(":id")
  eliminarCarrosPorId(@Param("id") id:string): string{
    return `aqui se eliminara el carro cuyo id es:${id}`
  }
}
