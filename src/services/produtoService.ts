import { AppDataSource } from "../data-source.js";
import { produto } from "../entities/produtos.js";

export class ProductServices {
  private productRepo = AppDataSource.getRepository(produto);

  listAll = async () => {
    return await this.productRepo.find();
  };

  create = async (productData: Partial<produto>) => {
    return await this.productRepo.save(productData);
  };

  update = async (id: number, productData: Partial<produto>) => {
    const product = await this.productRepo.findOneBy({ id: id });

    this.productRepo.merge(product!, productData);

    return await this.productRepo.save(product!);
  };

  delete = async (id: number) => {
    return this.productRepo.delete(id);
  };
}
