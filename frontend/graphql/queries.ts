import { gql } from "@apollo/client";

export const ALL_LINKS = gql`
  query getAllLinks {
    GetAllLinks {
      id
      anchorText
      url
    }
  }
`;

export const GET_ALL_IMAGES = gql`
  query getAllImages {
    GetAllImages {
      id
      name
      description
      url
      tags
    }
  }
`;
