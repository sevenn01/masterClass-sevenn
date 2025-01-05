import { GraphQLClient, gql } from "graphql-request";

export async function getCourses() {
  const endpoint = "https://api-ca-central-1.hygraph.com/v2/clzfsx1u7048507w6g9cyf3vx/master";
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

