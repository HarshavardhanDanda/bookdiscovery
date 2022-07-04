/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconssearchnew1 from "./Atomsiconssearchnew1";
export default function SearchField1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1068px"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SearchField1")}
    >
      <Flex
        gap="10px"
        direction="row"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="9px"
        padding="0px 0px 0px 16px"
        {...getOverrideProps(overrides, "Input")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(96,96,96,1)"
          lineHeight="22px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="986px"
          grow="1"
          basis="986px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search here by book title, author or ISBN"
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
        >
          <Atomsiconssearchnew1
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "atoms/icons/searchnew1")}
          ></Atomsiconssearchnew1>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children=""
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
