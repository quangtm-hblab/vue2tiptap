<template lang="">
  <div class="cmt-relative cmt-py-4 cmt-pl-4 cmt-bg-white" :class="commentItemData.isMentioned ? 'cmt-border-l-Orange cmt-border-l-4' : ''">
    <UnreadBadge v-if="commentItemData.unread" class="cmt-top-4 cmt-left-1"></UnreadBadge>
    <flux-button-menu
      class="cmt-absolute cmt-right-2 cmt-top-1"
      icon-id='ellipsishoriz'
      disabled='false'
      tooltip='コンテキストメニュー'
      @flux-menu-selected-event='v => { handleSelectAction(v.detail[0]) }'
      :items="JSON.stringify([
        {
          iconId: 'Edit',
          label: '編集',
          disabled: 'false',
          value: { action: 'edit' },
          tooltip: 'ユーザー情報',
        },
        {
          iconId: 'Delete',
          label: '削除',
          disabled: 'false',
          value: { action: 'delete' },
          tooltip: 'ユーザー情報',
        },
      ])"
    />
    <div>
      <span class="cmt-font-semibold cmt-mr-4">{{ commentItemData.creatorInfo.name }}</span> 
      <span class="cmt-text-sm cmt-font-normal cmt-text-txtGray">{{  convertTimeToFormattedString(new Date(commentItemData.createdAt), 'Asia/Tokyo') }}</span>
    </div>
    <div class="cmt-mt-2">
      <WangEditor @input-change="handleInputChange" :content="content" :editable="editable"></WangEditor>
      <div v-if="editable" class="cmt-flex cmt-justify-end cmt-mt-4">
        <div>
          <flux-button
            class="mr-4"
            type="primary"
            label="アップデート"
            :no-outline="true"
            :disabled="false"
            tooltip='ボタン'
            @click="onUpdateComment"
          />
        </div>
        <div>
          <flux-button
            type="normal"
            label="キャンセル"
            :no-outline="false"
            :disabled="false"
            tooltip='ボタン'
            @click="onCancelUpdateComment"
          />
        </div>
        
        
      </div>
    </div>
  </div>
</template>
<script>
import UnreadBadge from './UnreadBadge.vue';
import WangEditor from './WangEditor/WangEditor.vue';
 
export default {
  emits:['update-reply', 'delete-reply'],
  props:{
    commentItemData: Object,
    isReply: Boolean,
  },
  data(){
    return {
      showOptions: false,
      content: '',
      editable: false,
    }
  },
  components:{
    UnreadBadge,
    WangEditor
  },
  created(){
    this.content = this.commentItemData.message
  },
  watch:{
    commentItemData: {
      handler(newValue){
        this.content = newValue.message
      },
      deep: true
    }
  },
  methods:{
    convertTimeToFormattedString(time, timezone) {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: timezone
      };

      const formattedString = time.toLocaleString('en-US', options);
      return formattedString.replace(',', '');
    },
    handleSelectAction(option){
      if(option.action === 'edit'){
        this.editable = !this.editable
      }
      if(option.action === 'delete'){
        this.onDeleteComment()
      }
    },
    handleInputChange(newComment){
      this.content = newComment.htmlValue
    },
    onUpdateComment(){
      // if update reply
      if(this.isReply){
        const dataUpdate = {
          id: this.commentItemData.id,
          message: this.content,
        }
        // call api to update reply
        const fakeUpdatedReply = {
          id: dataUpdate.id,
          message: dataUpdate.message,
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
        this.$emit('update-reply', fakeUpdatedReply)
        this.editable = false
      }else{
        // if update comment
        const dataUpdate = {
          threadId: this.commentItemData.id,
          message: this.inputHtml
        }
        this.$store.dispatch('updateComment', dataUpdate)
        this.editable = false
      }
    },
    onDeleteComment(){
      if(this.isReply){
        // if delete reply
        // call api to delete reply
        this.$emit('delete-reply', this.commentItemData.id)
      }else{
        // if delete comment
        this.$store.dispatch('deleteComment', this.commentItemData.id)
      }
    },
    onCancelUpdateComment(){
      this.content = this.commentItemData.message
      this.editable = false
    }
  }
};
</script>
<style lang=""></style>
