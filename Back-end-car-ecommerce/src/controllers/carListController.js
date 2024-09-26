import carListService from "../services/carListService.js";

const getcar = async (req, res, next) => {
  const id = req.params;
  const result = await carListService.getcar(id);
  res.status(200).json({ message: result });
};

const togglePin = async (req, res, next) => {
  const { userId, carId, action } = req.body;

  try {
    const user = await carListService.togglePin(userId, carId, action);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getcar, togglePin };
