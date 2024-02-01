<!-- eslint-disable vue/no-parsing-error -->
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
          label: 'Edit',
          disabled: 'false',
          value: { action: 'edit' },
          tooltip: 'ユーザー情報',
        },
        {
          iconId: 'Delete',
          label: 'Delete',
          disabled: 'false',
          value: { action: 'delete' },
          tooltip: 'ユーザー情報',
        },
      ])"
    />
    <!-- <button class="cmt-absolute cmt-right-1 cmt-top-1" @click="onClickOptionsBtn">
      options
    </button>
    <div v-show="showOptions" class="cmt-absolute cmt-right-2 cmt-top-8 cmt-bg-white cmt-rounded-md cmt-shadow-lg cmt-border-gray-500 cmt-border-1 cmt-p-1 cmt-z-50 cmt-cursor-pointer">
      <div class="cmt-text-xs cmt-p-1" @click="onEditComment">edit</div>
      <div class="cmt-text-xs cmt-p-1" @click="onDeleteComment">delete</div>
    </div> -->
    <div>
      <span class="cmt-font-semibold cmt-mr-4">{{ commentItemData.creatorInfo.name }}</span> 
      <span class="cmt-text-sm cmt-font-normal cmt-text-txtGray">{{  convertTimeToFormattedString(new Date(commentItemData.createdAt), 'Asia/Tokyo') }}</span>
    </div>
    <div class="cmt-mt-2">
      <TiptapEditor v-model="inputHtml" :editable="false" :auto-focus="false" />
    </div>
  </div>
</template>
<script>
import UnreadBadge from './UnreadBadge.vue';
import TiptapEditor from './Editor/TiptapEditor.vue';
 
export default {
  props:{
    commentItemData: Object,
    isReply: Boolean,
  },
  data(){
    return {
      showOptions: false,
      inputHtml: '',
      editable: false,
    }
  },
  components:{
    UnreadBadge,
    TiptapEditor
  },
  created(){
    this.inputHtml = this.commentItemData.message
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
      console.log(option.action);
    },
    onEditComment(){
      this.editable = !this.editable
    },
    onDeleteComment(){
      console.log("delelte");
    },
    onClickOptionsBtn(){
      this.showOptions = !this.showOptions
    }
  }
};
</script>
<style lang=""></style>
