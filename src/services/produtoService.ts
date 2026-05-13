import { AppDataSource } from "../data-source.js";
import { produto } from "../entities/produtos.js";

// getRepository
export class produtoService {
  private repo = AppDataSource.getRepository(produto);
  // gerencia a tabela

  async create(data: Partial<produto>): Promise<produto> {
    //cria objeto e passa pro banco
    const produto = this.repo.create(data);
    return await this.repo.save(produto);
  }
  async lisAll(): Promise<produto[]> {
    // busca
    return await this.repo.find();
  }
}
