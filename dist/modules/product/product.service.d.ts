import { CreateProductDTO } from './dto/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDTO } from './dto/update-product.dto';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    createProduct(createProductDTO: CreateProductDTO): Promise<ProductEntity>;
    findAllProducts(): Promise<ProductEntity[]>;
    updateProduct(id: string, updatedData: UpdateProductDTO): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}
