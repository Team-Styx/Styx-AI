import {
  limitedRiskUseCases,
  minimalRiskUseCases,
  highRiskUseCases,
  prohibitedUseCases,
} from "../RiskData.js";
import ModelDetails from "../models/ModelDetails.js";

/**
 * @DESC register a new model
 * @POST /api/model/
 * @AUTH not required
 * @REQ_BODY { projectName, description, stakeholders, useCases, policies } => required fields for request body
 */
export const registerModel = async (req, res) => {
  try {
    const { projectName, description, stakeholders, useCases, policies } =
      req.body;

    if (
      !projectName ||
      !description ||
      !stakeholders ||
      !useCases ||
      !policies
    ) {
      return res.status(400).json({ message: "All fields are mandatory." });
    }

    const allUseCases = [
      ...minimalRiskUseCases,
      ...limitedRiskUseCases,
      ...highRiskUseCases,
      ...prohibitedUseCases,
    ];

    //checking if use cases provided are valid (match with allUseCases)
    const invalidUseCases = useCases.filter(
      (useCase) => !allUseCases.includes(useCase)
    );

    if (invalidUseCases.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid use cases provided.",
        invalid_use_cases: invalidUseCases,
      });
    }

    const newModelDetails = new ModelDetails({
      projectName,
      description,
      stakeholders,
      useCases,
      policies,
    });

    await newModelDetails.save();

    return res.status(201).json({
      success: true,
      message: "Model created successfully.",
      data: newModelDetails,
    });
  } catch (error) {
    console.error("Error registering model details.");
    return res.status(500).json({
      success: false,
      message: "Model not registered due to server error.",
      error: "Error: " + error.message,
    });
  }
};

/**
 * @DESC get information about all models
 * @GET /api/model/
 * @AUTH not required
 * @REQ_BODY NA
 */
export const getModelsData = async (req, res) => {
  try {
    const models = await ModelDetails.find({});

    if (models.length === 0) {
      return res
        .status(204)
        .json({ success: true, message: "No models found in database." });
    }

    return res.status(200).json({
      success: true,
      message: "Fetched model detail from the database.",
      data: models,
    });
  } catch (error) {
    console.error("Error fetching all models.");
    return res.status(500).json({
      success: false,
      message: "All models not fetched, server error.",
      error: "Error: " + error.message,
    });
  }
};

/**
 * @DESC get information about one model
 * @GET /api/model/:id
 * @AUTH not required
 * @REQ_BODY NA
 */
export const getOneModelData = async (req, res) => {
  try {
    const { id } = req.params;

    const model = await ModelDetails.findById(id);

    if (!model) {
      return res.status(404).json({
        success: true,
        message: "Model not found in database.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Model details fetched succcessfully.",
      data: model,
    });
  } catch (error) {
    console.error("Error fetching model details.");
    return res.status(500).json({
      success: false,
      message: "Model details not fetched, server error.",
      error: "Error: " + error.message,
    });
  }
};

/**
 * @DESC update a model's details
 * @PUT /api/model/:id
 * @AUTH not required
 * @REQ_BODY { projectName, description, stakeholders, useCases, policies } => fields to be updated
 */
export const updateModel = async (req, res) => {
  try {
    const { id } = req.params;
    const { projectName, description, stakeholders, useCases, policies } =
      req.body;

    // Validate the required fields if necessary
    if (
      !projectName &&
      !description &&
      !stakeholders &&
      !useCases &&
      !policies
    ) {
      return res.status(400).json({
        success: false,
        message: "At least one field is required for update.",
      });
    }

    const updatedModel = await ModelDetails.findByIdAndUpdate(
      id,
      { projectName, description, stakeholders, useCases, policies },
      { new: true, runValidators: true }
    );

    if (!updatedModel) {
      return res.status(404).json({
        success: false,
        message: "Model not found in the database.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Model updated successfully.",
      data: updatedModel,
    });
  } catch (error) {
    console.error("Error updating model details:", error.message);
    return res.status(500).json({
      success: false,
      message: "Model not updated, server error.",
      error: "Error: " + error.message,
    });
  }
};

/**
 * @DESC delete a model
 * @DELETE /api/model/:id
 * @AUTH not required
 * @REQ_BODY NA
 */
export const deleteModel = async (req, res) => {
  try {
    const { id } = req.params;

    const model = await ModelDetails.findByIdAndDelete(id);

    if (!model) {
      return res.status(404).json({
        success: false,
        message: "Model not found in the database.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Model deleted successfully.",
      data: model,
    });
  } catch (error) {
    console.error("Error deleting model details:", error.message);
    return res.status(500).json({
      success: false,
      message: "Model not deleted, server error.",
      error: "Error: " + error.message,
    });
  }
};
