/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import Organismscardbooksreading from "./Organismscardbooksreading";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function OrganismscardbooksreadingCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "OrganismscardbooksreadingCollection")}
    >
      {(item, index) => (
        <Organismscardbooksreading
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Organismscardbooksreading>
      )}
    </Collection>
  );
}
