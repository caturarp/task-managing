import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'containers-us-west-38.railway.app',
  port: 7562,
  username: 'postgres',
  password: 'F52qGAG9k4LV2yIgl3Vr',
  database: 'railway',
  autoLoadEntities: true,
  synchronize: true,
};
