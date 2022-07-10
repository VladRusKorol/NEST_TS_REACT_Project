import {
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  Table,
  AllowNull,
  NotEmpty,
  ForeignKey,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import Car from '../../Cars/models/cars.model';
import {Sequelize} from "sequelize";

@Table({
  tableName: 'tab_ListAuto',
  timestamps: true,
})
export default class ListAuto extends Model {
  @AutoIncrement // инкремент
  @PrimaryKey // первичный ключ
  @Column //описание колонны
  id?: number;

  @AllowNull(false) // не может быть ноль
  @ForeignKey(() => Car)
  @Column //описание колонны
  CarId!: number;

  @AllowNull(false) // не может быть ноль
  @NotEmpty
  @Column
  numberPlate!: string;

  @AllowNull(false) // не может быть ноль
  @Column
  active!: boolean;

  @HasOne(() => Car)
  car!: Car;
}
