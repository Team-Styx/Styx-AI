import express from "express";
import validateObjectId from "../middlewares/idValidate.js";
import {
  deleteModel,
  getModelsData,
  getOneModelData,
  registerModel,
  updateModel,
} from "../controller/modelDetailControllers.js";
const router = express.Router();

/**
 * @DESC register a new model
 * @POST /api/model/
 * @AUTH not required
 * @REQ_BODY { projectName, description, stakeholders, useCases, policies } => required fields for request body
 */
router.post("/", registerModel);

/**
 * @DESC get information about all models
 * @GET /api/model/
 * @AUTH not required
 * @REQ_BODY NA
 */
router.get("/", getModelsData);

/**
 * @DESC get information about one model
 * @GET /api/model/:id
 * @AUTH not required
 * @REQ_BODY NA
 */
router.get("/:id", validateObjectId, getOneModelData);

/**
 * @DESC update a model's details
 * @PUT /api/model/:id
 * @AUTH not required
 * @REQ_BODY { projectName, description, stakeholders, useCases, policies } => fields to be updated
 */
router.put("/:id", validateObjectId, updateModel);

/**
 * @DESC delete a model
 * @DELETE /api/model/:id
 * @AUTH not required
 * @REQ_BODY NA
 */
router.delete("/:id", validateObjectId, deleteModel);

export default router;
