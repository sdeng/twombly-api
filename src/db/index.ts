import * as Knex from "knex";
import * as Objection from "objection";
import knexfile from "../../knexConfig";
const knex: Knex = Knex(knexfile.development);
export default knex;

Objection.Model.knex(knex);
export const Model = Objection.Model;
