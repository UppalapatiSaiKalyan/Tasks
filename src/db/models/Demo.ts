import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface EmployeeAttributes {
    employeeId: number;
    name: string;
    email: string;
    department: string;
}

export interface EmployeeInput extends Optional<EmployeeAttributes, 'employeeId'> {}
export interface EmployeeOutput extends Required<EmployeeAttributes> {}

class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeAttributes {
    public employeeId!: number;
    public name!: string;
    public email!: string;
    public department!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Employee.init(
    {
        employeeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'employees',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Employee;

