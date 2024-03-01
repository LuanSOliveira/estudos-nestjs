import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { FindProductDTO } from './dto/find-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post()
    async createProjetc(@Body() createProduct: CreateProductDTO){
        const newProject = await this.productService.createProduct(createProduct)
        return{
            user: new FindProductDTO(newProject.id, newProject.name),
            message: 'Produto cadastrado com sucesso.'
        }
    }

    @Get()
    async findAllProducts(){
        return await this.productService.findAllProducts()
    }

    @Put('/:id')
    async updateProduct(
        @Param('id') id: string,
        @Body() updatedData: UpdateProductDTO
    ){
        await this.productService.updateProduct(id, updatedData)
        return {
            user: {
                id: id,
                name: updatedData.name
            },
            message: 'Produto atualizado com sucesso.'
        }
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id: string){
        await this.productService.deleteProduct(id)
        return 'Produto deletado com sucesso.'
    }
}
