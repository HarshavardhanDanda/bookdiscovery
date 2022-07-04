/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Atomsavatar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="4px 4px 4px 4x"
      {...rest}
      {...getOverrideProps(overrides, "Atomsavatar")}
    >
      <Icon
        width="32px"
        height="32px"
        viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
        paths={[
          {
            d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
            d:"M7.1623 19.9811H5.33165C5.14922 19.9811 5 19.8369 5 19.6605V4.34405C5 4.16769 5.14923 4.02344 5.33165 4.02344H7.16242C7.34485 4.02344 7.49408 4.1677 7.49408 4.34405V19.6602C7.49408 19.8368 7.34473 19.9811 7.1623 19.9811V19.9811Z", fill:"#FFB500",
            d:"M9.96622 19.9794H8.16124C7.97881 19.9794 7.82959 19.8352 7.82959 19.6588V6.59795C7.82959 6.4216 7.97882 6.27734 8.16124 6.27734H9.96622C10.1486 6.27734 10.2979 6.42161 10.2979 6.59795V19.6585C10.298 19.8351 10.1486 19.9794 9.96622 19.9794V19.9794Z", fill:"#FFB500",
            d:"M12.7439 19.9798H10.9391C10.7566 19.9798 10.6074 19.8355 10.6074 19.6591V4.32061C10.6074 4.14425 10.7567 4 10.9391 4H12.7441C12.9265 4 13.0757 4.14426 13.0757 4.32061V19.6589C13.0756 19.8353 12.9264 19.9796 12.7439 19.9796V19.9798Z" ,fill:"#FFB500",
            d:"M18.763 19.4859L17.0338 19.986C16.859 20.0366 16.6732 19.9397 16.621 19.7708L13.2692 8.93977C13.217 8.7708 13.3171 8.59119 13.4919 8.54075L15.2211 8.04075C15.3959 7.99021 15.5817 8.08705 15.6339 8.25602L18.986 19.087C19.0382 19.2559 18.938 19.4356 18.7632 19.486L18.763 19.4859Z",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 7")}
      ></Icon>
    </Flex>
  );
}