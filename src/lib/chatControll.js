//
import { GraphQLClient, gql } from "graphql-request";

const API_HYGRAPH_ENDPOINT="https://api-ca-central-1.hygraph.com/v2/clzfsx1u7048507w6g9cyf3vx/master";

export const getChats = async (id) => {

    //const endpoint = process.env.API_HYGRAPH_ENDPOINT;
    const endpoint = API_HYGRAPH_ENDPOINT;

    if (endpoint) {
        console.log(endpoint);
    } else {
        console.log('Endpoint not found');
        return;
    }

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": 'application/json',
        },
    });

    const query = `
        query MyQuery($idOfWeek: Int!) {
        weeks01(where: {idOfWeek: $idOfWeek}) {
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

    `
    
    const variables = { idOfWeek: id };

    try {
        const data = await graphQLClient.request(query,variables);
        console.log('from chatControll: ',id)
        return data;
        
    } catch (error) {
        console.error('failed to fetch Chats: ',error);
        return null;
    }

}


export const realTimeChat = async (idOfWeek, content, idOfUser, sender, timestamp) => {

    const endpoint = API_HYGRAPH_ENDPOINT;

    if (!endpoint) {
        console.log('Endpoint not found');
        return;
    }

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": 'application/json',
        },
    });

    const query = `

        mutation AddChatToExistingWeek($idOfWeek: Int!, $content: String!, $idOfUser: String!, $sender: String!, $timestamp: String!) {
        updateWeeks(
            where: {idOfWeek: $idOfWeek}
            data: {chats: {create: {Comments: {data: {
                content: $content,
                idOfUser: $idOfUser,
                sender: $sender,
                timestamp: $timestamp
            }}}}}
        ) {
            id
            idOfWeek
            chats {
                ... on Comments {
                    sender
                }
            }
        }
        publishWeeks(where: {idOfWeek: $idOfWeek}) {
            id
            idOfWeek
            title
        }
        }

    `;

    const variables = {
        idOfWeek,
        content,
        idOfUser,
        sender,
        timestamp
    };

    try {
        const data = await graphQLClient.request(query,variables);
        console.log('from creatChat: ',data)
        console.log('from creatChat the Content: ',idOfWeek,'',content,'/',idOfUser,'/',sender,'/',timestamp)
        return data;
        
    } catch (error) {
        console.error('failed to create Chats: ',error);
        return null;
    }
}