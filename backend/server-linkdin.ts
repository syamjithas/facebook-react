import express from "express";
import { graphqlHTTP } from "express-graphql";

import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        emails: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        friend: Friend
    }
`);

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing!");
});

const root = {
  friend: () => {
    return {
      id: 5658489489,
      firstName: "Manny",
      lastName: "Henri",
      gender: "Male",
      emails: [{ email: "me@me.com" }, { email: "another@me.com" }],
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
