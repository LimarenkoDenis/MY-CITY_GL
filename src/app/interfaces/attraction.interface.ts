export interface IAttraction {
    title: string;
    picture: string;
    description: string;
    rating: number;
    shareLink: string;
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
