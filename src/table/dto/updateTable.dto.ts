import { PartialType } from "@nestjs/mapped-types";
import { CreateTableDto } from "./createTable.dto";

export class updateTableDto extends PartialType(CreateTableDto){

};

