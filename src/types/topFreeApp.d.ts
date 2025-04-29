export interface TopFreeAppResponseType {
  "im:name": {
    label: string;
  };
  summary: {
    label: string;
  };
  title: {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
  id: {
    attributes: {
      "im:id": string;
    };
  };
  category: {
    attributes: {
      label: string;
    };
  };
}

export interface TopFreeAppListType {
  id: string;
  name: string;
  summary: string;
  title: string;
  image: string;
  category: string;
  totalRating?: number;
  rating?: number;
}
