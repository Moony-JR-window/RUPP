import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// // src/app.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdatabase', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }),
//     UserModule, // Feature module
//   ],
// })
// export class AppModule {}
