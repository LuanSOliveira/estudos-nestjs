import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { FindProductDTO } from './dto/find-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProjetc(createProduct: CreateProductDTO): Promise<{
        user: FindProductDTO;
        message: string;
    }>;
    findAllProducts(): Promise<import("./entities/product.entity").ProductEntity[]>;
    updateProduct(id: string, updatedData: UpdateProductDTO): Promise<{
        user: {
            id: string;
            name: string;
        };
        message: string;
    }>;
    deleteProduct(id: string): Promise<string>;
}
