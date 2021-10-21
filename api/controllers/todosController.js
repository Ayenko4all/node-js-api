class TodosController {
  index = () => {
    return (req, res, next) => {
      res.status(200).json({
        sucess: true,
        data: [
          {
            name: "Learn Node js",
          },
          {
            todo: "Get a Job",
          },
        ],
      });
    };
  };

  store = () => {
    return (req, res, next) => {
      res.status(201).json({ success: true });
    };
  };

  show = () => {
    return (req, res, next) => {
      res.status(200).json({ success: true, method: "show" });
    };
  };

  update = () => {
    return (req, res, next) => {
      res.status(201).json({ success: true, method: "update" });
    };
  };

  destroy = () => {
    return (req, res, next) => {
      res.status(200).json({ success: true, method: "delete" });
    };
  };
}

module.exports = new TodosController();
