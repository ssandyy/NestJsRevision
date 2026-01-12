import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { createBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Get()
  getAll() {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  getBlogById(@Param('id') id: string) {
    return this.blogService.getBlogById(id);
  }

  @Post()
  addBlog(@Body() createBlogDto: createBlogDto) {
    return this.blogService.createBlog(createBlogDto)
  }
}
