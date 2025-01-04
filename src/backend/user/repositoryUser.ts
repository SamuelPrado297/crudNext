import { User } from "@/share/models/user";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
    private static db: PrismaClient = new PrismaClient()

    /*static async list() {
        return await this.db.user.findMany()
    }*/

    static async save(user: User): Promise<User> {
        return this.db.user.upsert({
            where: { id: user.id},
            update: user,
            create: user
         })
    }

    static async getAll(): Promise<User[]> {
        return await this.db.user.findMany()
    }

    static async getById(id: number): Promise<User> {
        const user = await this.db.user.findUnique({
            where: { id },
        });
        return user as User;
    }
    
    static async delete(id: number): Promise<void> {
        await this.db.user.delete({
            where: { id },
        })
    }
} 