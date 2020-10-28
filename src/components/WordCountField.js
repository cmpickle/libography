import * as React from "react";
import { NumberField } from "react-admin";

export const WordCountField = (props) => (
  <NumberField
    record={{
      wordTotal:
        (props.data &&
          Object.values(props.data).length &&
          Object.values(props.data)
            .map((book) => book.wordCount)
            .reduce((acc, cur) => acc + cur)) ||
        0,
    }}
    source="wordTotal"
  ></NumberField>
);
