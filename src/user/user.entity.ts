import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column({ type: 'varchar', name: 'name', length: 100 })
  name: string;

  @Column({ type: 'varchar', name: 'email', length: 100 })
  email: string;

  @Column({ type: 'varchar', name: 'password', length: 100 })
  password: string;

  @Column({ type: 'int', name: 'name', length: 100 })
  roleId: string;
}
