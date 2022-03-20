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
