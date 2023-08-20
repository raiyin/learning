import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query{
        getAllUsers{
            id, username, age
        }
    }
`;

export const GET_ONE_USER = gql`
    query getUsers($id:ID){
        getUsers(id: $id){
            id, username
        }
    }
`;
