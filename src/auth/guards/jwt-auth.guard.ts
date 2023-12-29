// guardは不正なリクエストをガードする役割
// 認証に通過していないリクエストや権限がないリクエストをブロック

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
