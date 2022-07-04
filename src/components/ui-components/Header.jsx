/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Atomslogonew from "./Atomslogonew";
import Atomsiconsnotification from "./Atomsiconsnotification";
import Atomsavatar from "./Atomsavatar";
import { Button, Flex, SearchField, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="68px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(140,82,198,1), rgba(104,55,153,1))"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <Atomslogonew
        display="flex"
        gap="10px"
        position="absolute"
        top="19px"
        right="1687px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/logonew")}
      ></Atomslogonew>
      <Flex
        gap="24px"
        position="absolute"
        top="14px"
        right="100px"
        direction="row"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 31")}
      >
        <Atomsiconsnotification
          width="24px"
          height="22.24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/notification")}
        ></Atomsiconsnotification>
        <Atomsavatar
          display="flex"
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="40px"
          position="relative"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "atoms/avatar")}
        ></Atomsavatar>
      </Flex>
      <Flex
        gap="8px"
        position="absolute"
        top="17px"
        left="296px"
        direction="row"
        width="246px"
        justifyContent="space-between"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 48")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="34px"
          position="relative"
          size="small"
          isDisabled={false}
          variation="link"
          children="Home"
          {...getOverrideProps(overrides, "Button11423639")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="32px"
          position="relative"
          size="default"
          isDisabled={false}
          variation="link"
          new="wicon"
          children="Explore"
          {...getOverrideProps(overrides, "Button11423814")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="32px"
          position="relative"
          size="default"
          isDisabled={false}
          variation="link"
          new="wicon"
          children="My Library"
          {...getOverrideProps(overrides, "Button11423824")}
        ></Button>
      </Flex>
      <SearchField
        display="flex"
        gap="8px"
        position="absolute"
        top="14px"
        left="607px"
        direction="column"
        width="1068px"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
    </View>
  );
}
