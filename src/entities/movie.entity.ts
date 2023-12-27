import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid') // 主キーで自動採番カラム
  id: number;
  @Column() // 通常のカラムを表す
  title: string;
  @Column()
  description: string;
  @Column()
  rating: number;
  @Column()
  review: string;
  @Column()
  createdAt: string;
  @Column({ nullable: true })
  updatedAt: string;
}
