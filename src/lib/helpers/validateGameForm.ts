import { AddGameRequest } from "../../api/Games/games.types";
import { ErrorFormDataType } from "../../components/GameForm/GameForm";

export const validate = (obj: AddGameRequest): ErrorFormDataType => {
  const errors: ErrorFormDataType = {};
  if (!obj.title) errors.title = "This field is required";
  if (!obj.developer) errors.developer = "This field is required";
  if (!obj.description) errors.description = "This field is required";
  if (!obj.price) errors.price = "This field is required";

  if (obj.price < 0) errors.price = "Price error: should be positive number";
  return errors;
};
