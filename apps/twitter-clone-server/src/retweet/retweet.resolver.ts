import * as graphql from "@nestjs/graphql";
import { RetweetResolverBase } from "./base/retweet.resolver.base";
import { Retweet } from "./base/Retweet";
import { RetweetService } from "./retweet.service";

@graphql.Resolver(() => Retweet)
export class RetweetResolver extends RetweetResolverBase {
  constructor(protected readonly service: RetweetService) {
    super(service);
  }
}
