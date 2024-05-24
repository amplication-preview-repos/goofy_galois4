/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Retweet as PrismaRetweet,
  User as PrismaUser,
} from "@prisma/client";

export class RetweetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RetweetCountArgs, "select">): Promise<number> {
    return this.prisma.retweet.count(args);
  }

  async retweets<T extends Prisma.RetweetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RetweetFindManyArgs>
  ): Promise<PrismaRetweet[]> {
    return this.prisma.retweet.findMany<Prisma.RetweetFindManyArgs>(args);
  }
  async retweet<T extends Prisma.RetweetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RetweetFindUniqueArgs>
  ): Promise<PrismaRetweet | null> {
    return this.prisma.retweet.findUnique(args);
  }
  async createRetweet<T extends Prisma.RetweetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RetweetCreateArgs>
  ): Promise<PrismaRetweet> {
    return this.prisma.retweet.create<T>(args);
  }
  async updateRetweet<T extends Prisma.RetweetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RetweetUpdateArgs>
  ): Promise<PrismaRetweet> {
    return this.prisma.retweet.update<T>(args);
  }
  async deleteRetweet<T extends Prisma.RetweetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RetweetDeleteArgs>
  ): Promise<PrismaRetweet> {
    return this.prisma.retweet.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.retweet
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
