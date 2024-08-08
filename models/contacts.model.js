const moongose = require("mongoose");

const ContactSchema = moongose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Contact = moongose.model("Contact", ContactSchema);
module.exports = Contact;

//const Contact = module.exports = moongose.model("Contact",ContactSchema)
