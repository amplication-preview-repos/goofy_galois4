import { Module } from "@nestjs/common";
import { RetweetModuleBase } from "./base/retweet.module.base";
import { RetweetService } from "./retweet.service";
import { RetweetController } from "./retweet.controller";
import { RetweetResolver } from "./retweet.resolver";

@Module({
  imports: [RetweetModuleBase],
  controllers: [RetweetController],
  providers: [RetweetService, RetweetResolver],
  exports: [RetweetService],
})
export class RetweetModule {}
