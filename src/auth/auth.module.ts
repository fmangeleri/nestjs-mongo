import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';

import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
