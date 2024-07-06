import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useQuery } from '@apollo/client';

import { getOneProductByID } from "../graphql/mutations/products/index";

export default function Product() {
    const id = useParams();
    const [searchParams] = useSearchParams();
    const { data, loading, error } = useQuery(getOneProductByID, {
      variables: {
        id: searchParams.get("id"),
      },
    });
    console.log(id,data, searchParams.get("id"));
    return (
        <div>
        </div>
    )

}