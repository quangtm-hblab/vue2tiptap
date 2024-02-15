<template lang="">
  <div class="cmt-my-[20px] cmt-rounded-lg cmt-shadow-lg">
    <!-- message item content -->
    <CommentItem :comment-item-data="threadItemData" class="cmt-rounded-t-lg cmt-border-b-[1px] cmt-border-[#E7E7E7]" />
    <!-- message item extend-reply-btn -->
    <div v-if="!isShowingReply && numberOfReply > 0">
      <div
        v-if="numberOfReply > 1"
        class="cmt-bg-white cmt-pl-4 cmt-py-2 cmt-border-b-[1px] cmt-border-[#E7E7E7] cmt-text-Mint cmt-text-sm cmt-cursor-pointer cmt-flex cmt-items-center"
        @click="isShowingReply = true">
        <div>
          <flux-icon-button
            type="primary"
            :icon-id="'downarrowhead'"
            icon-size="16"
            width="16"
            height="16"
            disabled="false" /> 
        </div>
        <div>{{ numberOfReply + ' 件の返信' }}</div>
      </div>
    </div>
    <div
      v-if="isShowingReply"
      class="cmt-bg-white cmt-pl-4 cmt-py-2 cmt-border-b-[1px] cmt-border-[#E7E7E7] cmt-text-Mint cmt-text-sm cmt-cursor-pointer cmt-flex cmt-items-center"
      @click="isShowingReply = false">
      <div>
        <flux-icon-button
          class="cmt-text-Mint"
          type="primary"
          :icon-id="'uparrowhead'"
          icon-size="16"
          width="16"
          height="16"
          disabled="false" /> 
      </div>
      <div>すべて折りたたむ</div>
    </div>
    <!-- message item latest reply -->
    <CommentItem v-if="!isShowingReply && latestReply" 
      :comment-item-data="latestReply" 
      @update-reply="handleUpdateReply" 
      @delete-reply="handleDeleteReply" 
      is-reply
    />
    <!-- message item list reply -->
    <div v-if="isShowingReply">
      <CommentItem v-for="replyItem in listReply" :key="replyItem.id" 
        :comment-item-data="replyItem" 
        @update-reply="handleUpdateReply" 
        @delete-reply="handleDeleteReply" 
        is-reply 
      />
    </div>
    <!-- message item reply-btn -->
    <div v-if="!isCommenting" class="cmt-pl-4 cmt-py-2 cmt-bg-white cmt-rounded-b-lg cmt-cursor-pointer cmt-text-txtGray cmt-flex cmt-items-center" @click="onShowCreateComment">
      <div>
        <flux-icon-button
        :disabled="false"
        class="reply-button-icon"
        icon-id="return"
        icon-size="16"
        width="16"
        circled="false"
        filled="false"
      />
      </div> 
      <div>返信</div>
    </div>
    <div v-else>
      <CreateComment is-reply @create-reply="handleCreateReply" @input-lose-focus="handleInputLoseFocus" />
    </div> 
  </div>
</template>
<script>
import CommentItem from './CommentItem.vue'
import CreateComment from './CreateComment.vue';
import { fetchListReply } from '@/modules/request';
export default {
  props:{
    threadItemData: Object
  },
  data(){
    return{
      MAX_LOADED_REPLY: 10,
      isCommenting: false,
      isShowingReply: false,
      listReply: [],
      latestReply: null,
      numberOfReply: null
    }
  },
  components:{
    CommentItem,
    CreateComment,
  },
  async created(){
    // fetch list reply
    this.listReply = await fetchListReply(this.threadItemData.id)
    
    this.latestReply = this.threadItemData.replyLatest
    this.numberOfReply = this.threadItemData.replyTotal ||  0
  },
  methods:{
    onShowCreateComment(){
      this.isCommenting = true
    },
    handleInputLoseFocus(){{
      this.isCommenting = false
    }},
    handleCreateReply(reply){
      // call api create reply
      const fakeCreatedReply = {
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        message: reply,
        creatorInfo: {
          id: 'd65e13b1-f274-4708-96fb-18096f1a5beb',
          mailAddress: 'apm-dxpf-dev014@fujifilm.com',
          name: '統合 十四'
        },
        createdAt: '2024-01-22T03:09:20.960Z',
        mentionTo: [],
        unread: false,
        isMentioned: false
      }
      this.listReply.push(
        fakeCreatedReply
      )

      this.numberOfReply += 1
      this.isCommenting = false
      this.latestReply = fakeCreatedReply
    },
    handleUpdateReply(updatedReply){
      // call api delete reply
      const index = this.listReply.findIndex((c) => c.id === updatedReply.id);
      if (index !== -1) {
        this.listReply.splice(index, 1, updatedReply);
      }
    },
    handleDeleteReply(replyId){
      // check if this reply is latest reply => remove
      if(this.latestReply.id === replyId){
        this.latestReply = null
      }
      // remove from list reply
      const index = this.listReply.findIndex(item => item.id === replyId);
      if (index !== -1) {
        this.listReply.splice(index, 1);
      }

      this.numberOfReply -= 1
    }
  }
};
</script>
<style lang=""></style>
