import React, { Fragment } from "react";
import Stack from "@/components/Stack";
import DetailApp from "@/components/DetailApp";
import Divider from "@/components/Divider";
export default function List() {
  return (
    <Stack className="px-hor-container pr-0">
      {Array.from({ length: 10 }).map((_, index) => (
        <Fragment key={index}>
          {index > 0 && <Divider />}
          <DetailApp index={index} />
        </Fragment>
      ))}
    </Stack>
  );
}
