import models from "../references/associations.js";
import { VERIFY } from "./jwt.js";
import sequelize from "./sequelize.js";

const {
  CenterModel,
  DepartmentsModel,
  DirectionsModel,
  PositionModel,
  UsersModel,
  ChecksModel,
  GroupsModel,
  IncomesModel,
  OutlayModel,
} = models;
[
  CenterModel,
  DepartmentsModel,
  DirectionsModel,
  PositionModel,
  UsersModel,
  ChecksModel,
  GroupsModel,
  IncomesModel,
  OutlayModel,
].map(async (model) => await model.sync({ alter: true }));
