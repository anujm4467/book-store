import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { ReadRoleDto, CreateRoleDto, UpdateRoleDto } from './dtos';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get(':roleId')
  getRole(@Param('roleId', ParseIntPipe) roleId: number): Promise<ReadRoleDto> {
    return this._roleService.getById(roleId);
  }

  @Get()
  getRoles(): Promise<ReadRoleDto[]> {
    return this._roleService.getAll();
  }

  @Post()
  createRole(@Body() role: Partial<CreateRoleDto>): Promise<ReadRoleDto> {
    return this._roleService.create(role);
  }

  @Patch(':roleId')
  updateRole(
    @Param('roleId', ParseIntPipe) roleId: number,
    @Body() role: Partial<UpdateRoleDto>,
  ): Promise<ReadRoleDto> {
    return this._roleService.update(roleId, role);
  }

  @Delete(':roleId')
  deletedRole(@Param('roleId', ParseIntPipe) roleId: number) {
    return this._roleService.delete(roleId);
  }
}
