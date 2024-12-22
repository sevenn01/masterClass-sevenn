import { GraphQLClient, gql } from "graphql-request";

const API_HYGRAPH_ENDPOINT="https://api-ca-central-1.hygraph.com/v2/clzfsx1u7048507w6g9cyf3vx/master";

export const getWeekById = async (id) =>{

  const endpoint = API_HYGRAPH_ENDPOINT;

  if(endpoint)console.log(endpoint)
    else console.log('endpoint ???')


  
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": 'application/json',
    },
  });
  
  const query = gql`
    query MyQuery($idOfWeek: Int!) {
      weeks01(where: {idOfWeek: $idOfWeek}) {
        idOfWeek
        title
        goal {
          text
        }
        tools {
          text
        }
        link
        chapters {
          ... on Chapter {
            title
            description
            complete
            url
            video{
              url
            }
            videoUrl
          }
        }
        chats {
          ... on Comments {
          idOfUser
          content
          sender
          timestamp
          }
        }
      }
    }
  `;

  const varaibles = { idOfWeek: id };

  try {
    const data = await graphQLClient.request(query,varaibles);
    console.log('from getWeek: ',id)
    return data;
    
  } catch (error) {
    console.error('failed to fetch week: ',error);
    return null;
  }
}