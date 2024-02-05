const mongoose = require('mongoose')
const slugify = require('slugify');


const feedbackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, `Feedback field can't be empty`],
      trim: true,
      maxlength: [
        100,
        "A feedback must have less or equal then 140 characters",
      ],
      minlength: [10, "A feedback must have more or equal then 10 characters"],
    },
    slug: String,
    category: {
      type: String,
      required: [true, `Add a category`],
      enum: ["Feature", "UI", "UX", "Enhancement", "Bug"],
      default: "Feature",
    },
    status: {
      type: String,
      enum: ["Planned", "In-Progress", "Live"],
    },
    details: {
      type: String,
      trim: true,
      required: [true, "A Feedback must have a description"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//virtual populate

feedbackSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "feedback",
  localField: "_id",
});

feedbackSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});


feedbackSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;