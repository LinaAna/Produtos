/* id -> chave = PrimaryGeneratedColumn
   name -> nome do produto = Colunm
   quantity -> quantidade = Colunm
   price -> valor = Column
*/
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class produto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  name!: string;

  @Column("int")
  quant!: number;

  @Column("decimal")
  price!: number;
}
