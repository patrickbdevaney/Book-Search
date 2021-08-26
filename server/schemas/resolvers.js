const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user2: async (parent, args, context) => {
         if(context.user) {
         const data = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
      
      return data;
      }

      throw new AuthenticationError('Please log in');
    }
  },

  Mutation: {

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const correct = await user.isCorrectPassword(password);
      if (!correct) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    create: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
  
    updatebook: async (parent, { input }, context)=> {
      if (context.user) {
        const updated = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true }
        );
        return updated;
      }
      throw new AuthenticationError('Please log in.')
    },

    remove: async (parent, args, context) => {
      if (context.user) {
        const updated = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: args.bookId } } },
          { new: true }
        );
        return updated;
      }
      throw new AuthenticationError('Please log in.')
    } 
  }
};

module.exports = resolvers;