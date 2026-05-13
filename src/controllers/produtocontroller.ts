/*
201 = criado
200 = ok
*/
import { Request, Response } from "express";
import { produtoService } from "../services/produtoService.js";

const service = new produtoService();

export class ProdutoController {
  async create(req: Request, res: Response) {
    const produto = await service.create;
    return res.status(201).json(produto); // criado
  }
  async list(req: Request, res: Response) {
    const produto = await service.lisAll();
    return res.status(200).json(produto); // ok
  }
}
