/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SearchField(props) {
  const { searchBook, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="300px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SearchField")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "InputGroup")}
      >
        <Flex
          gap="10px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="0px 0px 0px 16px"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="226px"
            grow="1"
            basis="226px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Placeholder"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="42px"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Button")}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
