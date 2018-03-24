import { v4 } from 'node-uuid';

const fakeDatabase = {
  gymGoers: [],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const loginUser = user => (
  delay(500) // simulate network request round trip time
    .then(() => {
      const gymGoer = { // create a new gym goer
        id: v4(),
        email: user.email,
      };
      fakeDatabase.gymGoers.push(gymGoer); // add to the DB
      return {
        jwt_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJneW1Hb2VyIjp7ImlkIjoiNWE4NDA5YzMwN2EzYjc2MmFjMWE2YmE0IiwiZW1haWwiOiJhbGV4QGJhbmRpc2NoLmNvbSJ9LCJpYXQiOjE1MjE4OTUxMDAsImV4cCI6MTUyMjQ5OTkwMCwic3ViIjoiYWxleEBiYW5kaXNjaC5jb20ifQ.X5MsbXWOPxLVtluxlcvOVPU7ZG_dG3wZohgsJrU8d1Q',
      };
    })
);
