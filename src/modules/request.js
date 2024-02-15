/* eslint-disable no-unused-vars */
import { api } from "./api";

import { listMember, listComment, listReply, commentItem } from "./mock-data"

export const fetchListComment = async (workspaceId, repoId) => {
  try {
    // const response = await api.get('/list-comment', { params:{workspaceId, repoId}})
    // fake comment
    return new Promise((resolve)=>{
      resolve(listComment)
    })
  } catch (error) {
    console.error(error)
  }
}

export const fetchListReply = async (commentId) => {
  try {
    // const response = await api.get('/list-reply', {
    //   params:{commentId}
    // })
    return new Promise((resolve)=>{
      resolve(listReply)
    })
  } catch (error) {
    console.error(error)
  }
}

export const createNewComment = async (workspaceId, repoId, comment) => {
  try {
    // const response = await api.get('/create-comment', {
    //   params:{commentId}
    // })

    return new Promise((resolve)=>{
      const fakeCreatedComment = {
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        message: comment,
        creatorInfo: {
          id: "d65e13b1-f274-4708-96fb-18096f1a5beb",
          mailAddress: "apm-dxpf-dev014@fujifilm.com",
          name: "統合 十四",
        },
        createdAt: "2024-01-22T03:09:20.960Z",
        mentionTo: [],
        unread: true,
        isMentioned: false,
      };
      resolve(fakeCreatedComment)
    })
  } catch (error) {
    console.error(error);
  }
}

export const editComment = async (commentId, newComment) => {
  try {
    // const response = await api.get('/create-comment', {
    //   params:{commentId}
    // })

    return new Promise((resolve)=>{
      const fakeUpdatedComment = {
        id: commentId,
        message: newComment,
        creatorInfo: {
          id: "d65e13b1-f274-4708-96fb-18096f1a5beb",
          mailAddress: "apm-dxpf-dev014@fujifilm.com",
          name: "統合 十四",
        },
        createdAt: "2024-01-22T03:09:20.960Z",
        mentionTo: [],
        unread: true,
        isMentioned: false,
      };
      resolve(fakeUpdatedComment)
    })
  } catch (error) {
    console.error(error)
  }
}

export const deleteComment = async (commentId) => {
  try {
    // const response = await api.get('/create-comment', {
    //   params:{commentId}
    // })

    return new Promise((resolve)=>{
      resolve(true)
    }) 
  } catch (error) {
    console.error(error)
  }
}

export const createReply = async (commentId, comment) => {
}

export const editReply = async (commentId, newReply) => {
}

export const deleteReply = async (commentId) =>{
  try {
    const response = api.delete('/delete-reply', {
      commentId
    })
  } catch (error) {
    console.error(error);
  }
}

export const getListMember = async (workspaceId, repoId) => {
  try {
    // const response = api.get('/list-mention', {
    //   params : {
    //       workspaceId, 
    //       repoId
    //     }
    //   }
    // )
    return new Promise((resolve)=>{
      resolve(listMember)
    })
  } catch (error) {
    console.error(error);
  }
}