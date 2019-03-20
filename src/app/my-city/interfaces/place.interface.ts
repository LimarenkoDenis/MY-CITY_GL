export interface IPlace {
  id: number;
  title: string;
  description: string;
  address: string;
  picture: string;
  pictures: string[];
  shareLink: string;
  rating: number;
  createdBy: ICreatedData;
  updated: IUpdatedData;
}

export interface IUserData {
  name: string;
  avatar: string;
}

export interface IUpdatedData {
  lastModifiedDate: string;
  modifiedBy: IUserData;
}

export interface ICreatedData {
  createdDate: string;
  userData: IUserData;
}
