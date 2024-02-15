<template lang="">
  <div>
    <!-- <TiptapEditor
      v-model="contentHtml"
      @input-text="handleInputText"
      @lose-focus="handleLoseFocus"
      editable
      auto-focus
    /> -->
    <WangEditor @lose-focus="handleLoseFocus" @input-change="handleInputChange" editable></WangEditor>
    <div class="cmt-flex cmt-justify-end cmt-items-start cmt-px-2 cmt-pt-2">
      <!-- -1 because '\n' value in inputText when clear editor -->
      <div class="cmt-mr-4">{{ contentText.length + "/500" }}</div>
      <flux-icon-button
        icon-size="24"
        width="24"
        height="24"
        icon-id="paperairplane"
        @click="createComment"
      />
    </div>
  </div>
</template>
<script>
import WangEditor from "./WangEditor/WangEditor.vue";
export default {
  emits: ["input-lose-focus", "create-reply", 'create-comment'],
  props:{
    isReply: Boolean
  },
  components: {
    // TiptapEditor,
    WangEditor
  },
  data() {
    return {
      contentHtml: "",
      contentText: "",
    };
  },
  methods: {
    handleInputText(text) {
      this.contentText = text;
    },
    handleLoseFocus() {
      // if input field is blank
      if (this.contentText.length === 0) {
        this.$emit("input-lose-focus");
      }
    },
    handleInputChange(newComment){
      this.contentHtml = newComment.htmlValue
      this.contentText = newComment.textValue
    },
    createComment(){
      if(this.isReply){
        this.$emit('create-reply', this.contentHtml)
      }else{
        this.$emit('create-comment', this.contentHtml)
      }
      
    }
  },
  mounted(){
  }
};
</script>
<style lang=""></style>
