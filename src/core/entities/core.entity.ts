import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsString, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export abstract class CoreEntity {
  // 고유 ID
  @PrimaryGeneratedColumn('uuid')
  @Field(type => String)
  @IsUUID()
  id: string;

  // 사용 여부
  @Column({ default: true })
  @Field(type => Boolean)
  @IsBoolean()
  isActive: boolean;

  // 보관 여부
  @Column({ default: false })
  @Field(type => Boolean)
  @IsBoolean()
  isArchived: boolean;

  // 생성일자
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field(type => Date)
  @IsDate()
  createDateTime: Date;

  // 생성자
  @Column({ type: 'varchar', length: 300 })
  @Field(type => String)
  @IsString()
  createdBy: string;

  // 마지막 수정 일자
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field(type => Date)
  @IsDate()
  lastChangedDateTime: Date;

  // 마지막 수정자
  @Column({ type: 'varchar', length: 300 })
  @Field(type => String)
  @IsString()
  lastChangedBy: string;
}
