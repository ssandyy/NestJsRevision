import { Injectable } from '@nestjs/common';
import { createBlogDto } from './dto/create-blog.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class BlogService {
    constructor(private readonly prisma: PrismaService) { }

    async createBlog(blog: createBlogDto) {
        return this.prisma.blog.create({ data: blog });
    }

    async getAllBlogs() {
        return this.prisma.blog.findMany();
    }

    async getBlogById(id: string) {
        return this.prisma.blog.findUnique(
            { where: { id } }
        )
    }

    async updateBlog(id: string, blog: createBlogDto) {
        return this.prisma.blog.update({
            where: { id },
            data: blog
        })
    }

    async deleteBlog(id: string) {
        return this.prisma.blog.delete({ where: { id } })
    }
}
