const Contact = require("../models/contacts.model");

// Get Contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Get contacts with id
const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.send(contact);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Creating Contact
const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.json(contact);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Updating Contact
const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, req.body);

    if (!contact) {
      return res.json({ message: "Contact Not Found" });
    }

    const updateContact = await Contact.findById(id);

    res.json(updateContact);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Delete Contact
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id, req.body);

    if (!Contact) {
      return res.json({ message: "Can't Find Contact" });
    }

    res.json({ message: "Contact Deleted Successfully" });

    res.json(deleteContact);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};

// Get Data by id

/*

// Getting Data

  /*router.get("/contacts", async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json(contacts);
  Contact.find(function (err, contacts) {
      res.json(contacts);

});
//Adding Data
router.post("/addcontact", (req, res) => {
  let newContact = new Contact({
    first_name: req.body.first_name,
    phone: req.body.phone,
    image: req.body.image,
  });
  newContact.save((err, contact) => {
    if (err) {
      res.json({ msg: "Failed to add contact" });
    } else {
      res.json({ msg: "Contact added Successfully" });
    }
  });
});*/
