import Joi from "joi";

export const notePayloadSchema = Joi.object({
  title: Joi.string().required().max(50),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

export const noteUpdatePayloadSchema = Joi.object({
  title: Joi.string().max(50), // Tidak pakai .required() agar opsional
  body: Joi.string(),
  tags: Joi.array().items(Joi.string()),
}).min(1);

export const noteQuerySchema = Joi.object({
  title: Joi.string().empty(),
});