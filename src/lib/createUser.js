import { GraphQLClient, gql } from "graphql-request";

const API_HYGRAPH_ENDPOINT = "https://api-ca-central-1.hygraph.com/v2/clzfsx1u7048507w6g9cyf3vx/master";

export const createUser = async (email, id) => {
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
//($userId: Int!, $email: String!)
    const query = gql`
       
        mutation CompleteUpdateCopy($userId: Int!, $email: String!) {
        createUserEnrollCourse(
          data: {
            userEmail: $email,
            userId: $userId,
            completedWeeks: {
              create: [
                {
                  CompletedWeeks: {
                    weekId: 1,
                    chapterComplete: {
                      create: [
                        { ChapterComp: { complete: false, idOfChapter: 0 } },
                        { ChapterComp: { complete: false, idOfChapter: 1 } },
                        { ChapterComp: { complete: false, idOfChapter: 2 } },
                        { ChapterComp: { complete: false, idOfChapter: 3 } },
                        { ChapterComp: { complete: false, idOfChapter: 4 } },
                        { ChapterComp: { complete: false, idOfChapter: 5 } },
                        { ChapterComp: { complete: false, idOfChapter: 6 } },
                        { ChapterComp: { complete: false, idOfChapter: 7 } },
                        { ChapterComp: { complete: false, idOfChapter: 8 } }
                      ]
                    }
                  }
                },
                {
                  CompletedWeeks: {
                    weekId: 2,
                    chapterComplete: {
                      create: [
                        { ChapterComp: { complete: false, idOfChapter: 0 } },
                        { ChapterComp: { complete: false, idOfChapter: 1 } },
                        { ChapterComp: { complete: false, idOfChapter: 2 } },
                        { ChapterComp: { complete: false, idOfChapter: 3 } },
                        { ChapterComp: { complete: false, idOfChapter: 4 } },
                        { ChapterComp: { complete: false, idOfChapter: 5 } },
                        { ChapterComp: { complete: false, idOfChapter: 6 } },
                        { ChapterComp: { complete: false, idOfChapter: 7 } },
                        { ChapterComp: { complete: false, idOfChapter: 8 } }
                      ]
                    }
                  }
                },
                {
                  CompletedWeeks: {
                    weekId: 3,
                    chapterComplete: {
                      create: [
                        { ChapterComp: { complete: false, idOfChapter: 0 } },
                        { ChapterComp: { complete: false, idOfChapter: 1 } },
                        { ChapterComp: { complete: false, idOfChapter: 2 } },
                        { ChapterComp: { complete: false, idOfChapter: 3 } },
                        { ChapterComp: { complete: false, idOfChapter: 4 } },
                        { ChapterComp: { complete: false, idOfChapter: 5 } },
                        { ChapterComp: { complete: false, idOfChapter: 6 } },
                        { ChapterComp: { complete: false, idOfChapter: 7 } },
                        { ChapterComp: { complete: false, idOfChapter: 8 } }
                      ]
                    }
                  }
                },
                {
                  CompletedWeeks: {
                    weekId: 4,
                    chapterComplete: {
                      create: [
                        { ChapterComp: { complete: false, idOfChapter: 0 } },
                        { ChapterComp: { complete: false, idOfChapter: 1 } },
                        { ChapterComp: { complete: false, idOfChapter: 2 } },
                        { ChapterComp: { complete: false, idOfChapter: 3 } },
                        { ChapterComp: { complete: false, idOfChapter: 4 } },
                        { ChapterComp: { complete: false, idOfChapter: 5 } },
                        { ChapterComp: { complete: false, idOfChapter: 6 } },
                        { ChapterComp: { complete: false, idOfChapter: 7 } },
                        { ChapterComp: { complete: false, idOfChapter: 8 } }
                      ]
                    }
                  }
                },
                {
                  CompletedWeeks: {
                    weekId: 5,
                    chapterComplete: {
                      create: [
                        { ChapterComp: { complete: false, idOfChapter: 0 } },
                        { ChapterComp: { complete: false, idOfChapter: 1 } },
                        { ChapterComp: { complete: false, idOfChapter: 2 } },
                        { ChapterComp: { complete: false, idOfChapter: 3 } },
                        { ChapterComp: { complete: false, idOfChapter: 4 } },
                        { ChapterComp: { complete: false, idOfChapter: 5 } },
                        { ChapterComp: { complete: false, idOfChapter: 6 } },
                        { ChapterComp: { complete: false, idOfChapter: 7 } },
                        { ChapterComp: { complete: false, idOfChapter: 8 } }
                      ]
                    }
                  }
                },
                {
                  CompletedWeeks: {
                    weekId: 6,
                    chapterComplete: {
                      create: [
                        { ChapterComp: { complete: false, idOfChapter: 0 } },
                        { ChapterComp: { complete: false, idOfChapter: 1 } },
                        { ChapterComp: { complete: false, idOfChapter: 2 } },
                        { ChapterComp: { complete: false, idOfChapter: 3 } },
                        { ChapterComp: { complete: false, idOfChapter: 4 } },
                        { ChapterComp: { complete: false, idOfChapter: 5 } },
                        { ChapterComp: { complete: false, idOfChapter: 6 } },
                        { ChapterComp: { complete: false, idOfChapter: 7 } },
                        { ChapterComp: { complete: false, idOfChapter: 8 } }
                      ]
                    }
                  }
                }
                
              ]
            }
          }
        ) {
          id
        }
      }
    `;

    const variables = { userId: id, email: email };

    try {
        const data = await graphQLClient.request(query, variables);
        console.log(id,': ',email)
        const newUserId = data.createUserEnrollCourse.id;
        await publishUser(newUserId);
        return data;
    } catch (error) {
        console.error('Failed to create user: ', error);
        return null;
    }
}

const publishUser = async (id) => {
    const endpoint = API_HYGRAPH_ENDPOINT;

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": 'application/json',
        },
    });

    const publishMutation = gql`
        mutation PublishUser($id: ID!) {
            publishUserEnrollCourse(where: { id: $id }) {
                id
            }
        }
    `;

    try {
        const data = await graphQLClient.request(publishMutation, { id });
        return data;
    } catch (error) {
        console.error('Failed to publish user: ', error);
        return null;
    }
};
