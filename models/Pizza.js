const { Schema, model } = require('mongoose');

// Create the schema for the Pizza model
const PizzaSchema = new Schema(
    {
        pizzaName: {
            type: String,
        },
        createdBy: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        size: {
            type: String,
            default: 'Large'
        },
        toppings: [],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// Get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

// Create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// Export the Pizza model
module.exports = Pizza;