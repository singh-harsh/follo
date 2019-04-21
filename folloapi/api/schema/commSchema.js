let mongoose = require(__dirname + "/../db/mongoose.js");

let commSchemaTemplate = {
  cname: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  memberIds: [{
    member: String
  }  
],
  postids: {
    type: String,
    required: false,
    unique: false
  },
  communityPicture: {
    type: String
  },
  createdBy: {
    type: String,
    required: true,
    unique: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default:true
  }
};

let commSchema = new mongoose.Schema(commSchemaTemplate, {
  collection: "communities"
});

module.exports = commSchema;