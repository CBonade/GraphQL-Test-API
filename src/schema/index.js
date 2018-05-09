import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import posts from './queries/posts'
import post from './queries/post'
import author from './queries/author'
import addPost from './mutations/addPost'
import addComment from './mutations/addComment'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...posts,
            ...author,
            ...post,
        })
    }),

    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: () => ({
            ...addPost,
            ...addComment
        })
    })
});

export default schema;