import React, { Fragment, forwardRef } from "react";
import Stack from "@/components/Stack";
import DetailApp from "@/components/DetailApp";
import Divider from "@/components/Divider";
import type { TopFreeAppListType } from "@/types/topFreeApp";

interface ListProps {
  listData: TopFreeAppListType[];
}

const List = forwardRef<HTMLDivElement, ListProps>(({ listData = [] }, ref) => {
  return (
    <Stack className="px-hor-container pr-0" ref={ref}>
      {listData.map((appData, index) => (
        <Fragment key={`${appData.id}-${index}`}>
          {index > 0 && <Divider />}
          <DetailApp index={index} appData={listData[index]} />
        </Fragment>
      ))}
    </Stack>
  );
});

List.displayName = "List";

export default List;
