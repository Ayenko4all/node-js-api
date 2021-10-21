class UserController {
  register = () => {
    return (req, res, next) => {
      res.status(201).json({ success: true, method: "register" });
    };
  };

  login = () => {
    return (req, res, next) => {
      res.status(200).json({ success: true, method: "login" });
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

module.exports = new UserController();
