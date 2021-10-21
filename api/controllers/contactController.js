class ContactController {
  index = () => {
    return (req, res, next) => {
      res.status(200).json({
        sucess: true,
        data: [
          {
            first_name: "John",
            last_name: "Henry",
            telephone: "0809055667788",
          },
          {
            first_name: "Jules",
            last_name: "Janet",
            telephone: "0809044667700",
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

module.exports = new ContactController();
