import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './user.repository';
import { User } from 'src/entities/user.entity';

// strategyには@Injectable()デコレータが必要
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    // superで親クラスのコンストラクターにオブジェクトを渡す
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey123',
    });
  }
  async validate(payload: { id: string; username: string }): Promise<User> {
    const { id, username } = payload;
    const user = await this.userRepository.findOne({ id, username });

    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }
}

/*
親クラス：PassportStrategy
子クラス：JwtStrategy

親クラスのコンストラクタにデータを渡してインスタンスの初期化をするために、
子クラスがsuper()を使用して親クラスのコンストラクトを呼び出し、{...}オブジェクトを渡している
*/
