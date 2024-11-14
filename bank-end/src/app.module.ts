import { Module, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import configs from './feature-module/configs/configs';
// import { UserSchema } from './feature-module/schamas/hello.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: configs.database, // Path to .env file
    }),
    MongooseModule.forRootAsync({
      useFactory: async () =>{
        const uri = configs.database;;
        await mongoose.connect (uri);
        return {uri};
      }, 
    }),
    // MongooseModule.forFeature([{ name: 'User', schema:UserSchema }]),
  ],
  providers:[],
  controllers: [],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  async onModuleInit() {
    try {
      if (mongoose.connection.readyState === 1) {
        this.logger.log('MongoDB connected successfully');
      } else {
        this.logger.warn('MongoDB is not connected yet');
      }
    } catch (error) {
      this.logger.error('Error during MongoDB connection setup:', error);
    }
  }
}
