import mongoose from "mongoose";
import {
  prohibitedUseCases,
  highRiskUseCases,
  limitedRiskUseCases,
  minimalRiskUseCases,
} from "../RiskData.js";
const { Schema } = mongoose;

const allUseCases = [
  ...prohibitedUseCases,
  ...highRiskUseCases,
  ...limitedRiskUseCases,
  ...minimalRiskUseCases,
];

const ModelDetailsSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stakeholders: [
    {
      type: String,
    },
  ],
  useCases: [
    {
      type: String,
      enum: allUseCases,
      required: true,
    },
  ],
  riskAssessment: {
    type: String,
    enum: ["Prohibited Risk", "High Risk", "Limited Risk", "Minimal Risk"],
  },
  policies: [
    {
      type: String,
      required: true,
    },
  ],
});

/**
 * @runs_before_save - matches the use cases, and maps the risk assessment accordingly.
 */
ModelDetailsSchema.pre("save", function (next) {
  const useCases = this.useCases;

  let riskLevel = "Minimal Risk"; // Default to the lowest risk

  if (useCases.some((useCase) => prohibitedUseCases.includes(useCase))) {
    riskLevel = "Prohibited Risk";
  } else if (useCases.some((useCase) => highRiskUseCases.includes(useCase))) {
    riskLevel = "High Risk";
  } else if (
    useCases.some((useCase) => limitedRiskUseCases.includes(useCase))
  ) {
    riskLevel = "Limited Risk";
  }

  // Set the riskAssessment based on the highest risk found
  this.riskAssessment = riskLevel;

  next();
});

const ModelDetails = mongoose.model("ModelDetails", ModelDetailsSchema);
export default ModelDetails;
