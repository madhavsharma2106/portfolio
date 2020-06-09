import React from "react";
import {
  Div,
  Text,
  FlexDirectionVariants,
  AlignItemsVariants,
  PrimaryButton,
} from "../../../atoms";
import { InputText } from "../../../atoms/Form/InputText/InputText";
import { smallBreakpointStyles } from "../../../../utils";

function NewsLetterComponent() {
  return (
    <Div padding="70px" css={smallBreakpointStyles(`padding: 20px`)}>
      <Div
        margin="auto"
        flex
        flexDirection={FlexDirectionVariants.column}
        alignItems={AlignItemsVariants.center}
      >
        <Text
          size="25"
          lineHeight="1.4"
          align={AlignItemsVariants.center}
          marginBottom="20"
        >
          Twice a month I send a list of interesting <br /> stuff happening in
          the frontend world.
          <br /> Can I interest you in the same?
        </Text>
        <Div>
          <InputText type="email" placeholder="email" />
          <PrimaryButton
            css={smallBreakpointStyles(`width: 100%; margin-top: 10px`)}
          >
            Subscribe
          </PrimaryButton>
        </Div>
      </Div>
    </Div>
  );
}

export default NewsLetterComponent;
