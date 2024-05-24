import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RetweetService } from "./retweet.service";
import { RetweetControllerBase } from "./base/retweet.controller.base";

@swagger.ApiTags("retweets")
@common.Controller("retweets")
export class RetweetController extends RetweetControllerBase {
  constructor(protected readonly service: RetweetService) {
    super(service);
  }
}
