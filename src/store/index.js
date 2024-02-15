import Vue from "vue";
import Vuex from "vuex";
import * as request from './../modules/request'

Vue.use(Vuex);

const state = {
  workspaceId: null,
  repositoryId: null,
  comments: [], // store list comment
  members: [], // list member in workspace 
};

const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments;
  },
  ADD_COMMENT(state, comment) {
    state.comments.push(comment);
  },
  UPDATE_COMMENT(state, updatedComment) {
    const index = state.comments.findIndex((c) => c.id === updatedComment.id);
    if (index !== -1) {
      state.comments.splice(index, 1, updatedComment);
    }
  },
  DELETE_COMMENT(state, commentId) {
    state.comments = state.comments.filter((c) => c.id !== commentId);
  },
  SET_WORKSPACE_ID(state, workspaceId){
    state.workspaceId = workspaceId
  },
  SET_REPOSITORY_ID(state, repositoryId){
    state.repositoryId = repositoryId
  },
  SET_MEMBERS(state, members){
    state.members = members
  }
};

const actions = {
  // api fetch comment
  async fetchComments({ state, commit }) {
    const listComment = await request.fetchListComment(state.workspaceId, state.repositoryId)
    commit("SET_COMMENTS", listComment);
  },
  async addComment({ commit }, comment) {
    // call api create comment
    // api return data

    const newComment = await request.createNewComment(state.workspaceId, state.repositoryId, comment)
    commit("ADD_COMMENT", newComment);
  },
  async updateComment({ commit }, dataUpdate) {
    // call api to update comment
    const updatedComment = await request.editComment(dataUpdate.id, dataUpdate.message)
    commit("UPDATE_COMMENT", updatedComment);
  },
  async deleteComment({ commit }, commentId) {
    // call api to delete comment
    const deletedSuccess = await request.deleteComment(commentId)
    if(deletedSuccess){
      commit("DELETE_COMMENT", commentId);
    }
  },
  setWorkspaceId({ commit }){
    const workspaceId = sessionStorage.getItem('workspaceId');
    commit("SET_WORKSPACE_ID", workspaceId)
  },
  setRepositoryId({commit}){
    const repositoryId = sessionStorage.getItem('tmp_plug_repositoryId')
    commit("SET_REPOSITORY_ID", repositoryId)
  },
  async fetchMembers({state, commit}){
    const listMember = await request.getListMember(state.workspaceId, state.repositoryId)
    commit("SET_MEMBERS", listMember)
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
