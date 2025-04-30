import React, { Fragment } from "react";
import Stack from "@/components/Stack";
import DetailApp from "@/components/DetailApp";
import Divider from "@/components/Divider";
import type { TopFreeAppListType } from "@/types/topFreeApp";

interface ListProps {
  listData: TopFreeAppListType[];
}

export default function List({ listData = [] }: ListProps) {
  return (
    <Stack className="px-hor-container pr-0">
      {listData.map((appData, index) => (
        <Fragment key={`${appData.id}-${index}`}>
          {index > 0 && <Divider />}
          <DetailApp index={index} appData={listData[index]} />
        </Fragment>
      ))}
    </Stack>
  );
}
