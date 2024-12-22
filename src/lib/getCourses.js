import { GraphQLClient, gql } from "graphql-request";

export async function getCourses() {
  const endpoint = process.env.API_HYGRAPH_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": 'application/json',
    },
  });

  const query = gql`
    query SixMaster {
      masterClasses {
        idOfCourse
        title
        state
        description
        slug
        thumb {
          url
        }
      }
      weeks01 {
        idOfWeek
        title
        goal {
          text
        }
        tools {
          text
        }
        link
        
      }
    }

  `;

  const data = await graphQLClient.request(query);
  return data;
}

