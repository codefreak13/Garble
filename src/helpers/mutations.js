import {gql} from 'apollo-boost';

export const ADD_CLIENT = gql`
  mutation(
    $firstname: String!
    $surname: String!
    $phone: String!
    $password: String!
    $email: String
    $address: String!
    $city: String!
    $state: String!
  ) {
    addClient(
      data: {
        firstname: $firstname
        surname: $surname
        phone: $phone
        password: $password
        email: $email
        address: $address
        city: $city
        state: $state
      }
    )
  }
`;

export const VERIFY_USER = gql`
  mutation($verificationCode: String!) {
    verifyUser(verificationCode: $verificationCode)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation($newPassword: String!) {
    changePassword(data: {newPassword: $newPassword})
  }
`;

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      token
      userId
    }
  }
`;

export const BOOKSERVICE = gql`
  mutation(
    $user: ID
    $serviceType: serviceTypes
    $firstname: String
    $surname: String
    $email: String
    $address: String
    $city: String
    $state: String
  ) {
    bookService(
      data: {
        user: $user
        serviceType: $serviceType
        firstname: $firstname
        surname: $surname
        email: $email
        address: $address
        city: $city
        state: $state
      }
    ) {
      url
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation(
    $id: ID
    $city: String
    $state: String
    $phone: String
    $address: String
    $firstname: String
    $surname: String
  ) {
    updateClient(
      id: $id
      data: {
        city: $city
        state: $state
        phone: $phone
        address: $address
        firstname: $firstname
        surname: $surname
      }
    )
  }
`;
