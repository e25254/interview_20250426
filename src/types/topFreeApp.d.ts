export interface ItunesAppResponseType {
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

export interface AppDetailsResponseType {
  results: {
    userRatingCount: number;
    averageUserRating: number;
  }[];
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
