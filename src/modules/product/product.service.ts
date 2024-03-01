import { CreateProductDTO } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ){}

    async createProduct(createProductDTO: CreateProductDTO): Promise<ProductEntity>{
        const newProduct = new ProductEntity()
        newProduct.name = createProductDTO.name

        await this.productRepository.save(newProduct)
        return newProduct
    }

    async findAllProducts(){
        return await this.productRepository.find()        
    }

    async updateProduct(id: string, updatedData: UpdateProductDTO){
        await this.productRepository.update(id, updatedData)
    }
    
    async deleteProduct(id: string){
        await this.productRepository.delete(id)
    }
}
