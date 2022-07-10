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
  BelongsTo,
  HasMany,
  Default,
  BelongsToMany,
} from 'sequelize-typescript';
import ListAuto from '../../ListAuto/models/listauto.model';

@Table({
  tableName: 'tab_Cars',
  timestamps: true,
})
export default class Car extends Model {
  /////////////////////////////////////////////////Декораторы для описания столбцов
  @AutoIncrement // инкремент
  @PrimaryKey // первичный ключ
  @Column //описание колонны
  @ForeignKey(() => ListAuto) //внешний ключ
  id?: number;
  /////////////////////////////////////////////////////////////////
  @AllowNull(false) // не может быть ноль
  @NotEmpty
  @Column
  name!: string;
  ///////////////////////////////////////////////////////////////////
  @AllowNull(false) // не может быть ноль
  @NotEmpty
  @Column
  vin!: string;
  /////////////////////////////////////////////////////////////////////
  @AllowNull(false) // не может быть ноль
  @Column({ defaultValue: true })
  active!: boolean;

  @BelongsTo(() => ListAuto, 'CarId') //принадлежит
  auto!: ListAuto;
}
