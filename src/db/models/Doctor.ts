import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface DoctorAttributes {
    doctorId: number;
    doctorName: string;
    specialty: string;
}

export interface DoctorInput extends Optional<DoctorAttributes, 'doctorId'> {}
export interface DoctorOutput extends Required<DoctorAttributes> {}

class Doctor extends Model<DoctorAttributes, DoctorInput> implements DoctorAttributes {
    public doctorId!: number;
    public doctorName!: string;
    public specialty!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Doctor.init(
    {
        doctorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        doctorName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'doctors',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Doctor;
