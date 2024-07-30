import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface CrudAttributes {
    id: number;
    languagename: string;
    languagecode: string;
}

export interface CrudInput extends Optional<CrudAttributes, 'id'> {}
export interface CrudOutput extends Required<CrudAttributes> {}

class Crud extends Model<CrudAttributes, CrudInput> implements CrudAttributes {
    public id!: number;
    public languagename!: string;
    public languagecode!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Crud.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        languagename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        languagecode: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'crud',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Crud;
