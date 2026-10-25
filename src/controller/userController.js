exports.getUserById = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user: { id: req.params.id, name: "Mario", role: "customer" },
    },
  });
};
