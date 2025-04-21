export const badRequest = (res, message) =>
  res.status(400).json({ error: message });

export const notFound = (res, message) =>
  res.status(404).json({ error: message });

export const serverError = (res, message) =>
  res.status(500).json({ error: message });

export const badGateway = (res, message) =>
  res.status(502).json({ error: message });
