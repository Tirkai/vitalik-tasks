interface IUser {
  userId: string;
  name: string;
  groups: IUserGroup[];
}

interface IResult {
  users: IUser[];
}

interface IClaim {
  claimId: string;
  code: string;
}

interface IUserGroup {
  groupId: string;
  name: string;
  claims: IClaim[];
}

interface IResponse {
  page: number;
  offset: number;
  result: IResult;
}

export const data: IResponse = {
  page: 0,
  offset: 0,
  result: {
    users: [
      {
        userId: "be29b3ab-2bc2-41cb-b465-a25cb7d3821d",
        name: "User1",
        groups: [
          {
            groupId: "77685097-68bc-467c-aae0-c09c8a7c14e6",
            name: "Admin",
            claims: [
              {
                claimId: "b6bc268a-5bf5-4f6a-b2cc-23c22b691580",
                code: "posts:read",
              },
              {
                claimId: "ee27d12b-5deb-4308-8889-4f18290c79fa",
                code: "posts:update",
              },
              {
                claimId: "239a4543-acfa-4873-b882-effe7c862407",
                code: "posts:delete",
              },
            ],
          },
        ],
      },
    ],
  },
};
