import gql from 'graphql-tag';

export const Home = {
    getAllDishes: gql`
        {
            allDishes {
                id,
                name,
                spoilDays
            }
        }
    `,
};