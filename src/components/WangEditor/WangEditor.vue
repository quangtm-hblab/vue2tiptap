<template lang="">
  <div
    class="cmt-relative"
    :class="editable? 'cmt-border-2 cmt-border-Mint' : ''">
    <Editor
      v-model="html"
      :default-config="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
      @onBlur="onBlur"
      @onFocus="onFocus"
      @onChange="onChange" />
    <MentionModal
      v-if="isShowModal"
      @hideMentionModal="hideMentionModal"
      @insertMention="insertMention" />
  </div>
</template>
<script>
import { Editor } from '@wangeditor/editor-for-vue'
import { Boot } from '@wangeditor/editor'
import mentionModule from '@wangeditor/plugin-mention'
import MentionModal from './MentionModal'

Boot.registerModule(mentionModule)

export default {
  components: {
    Editor,
    MentionModal
  },
  props: {
    editable: Boolean,
    autoFocus: Boolean,
    content: String,
  },
  emits: ['lose-focus', 'input-change'],
  data() {
    return {
      editor: null,
      html: this.content,
      toolbarConfig: { },
      editorConfig: { 
        placeholder: 'Type here...',
        autoFocus: this.editable,
        EXTEND_CONF: {
          mentionConfig: {
            showModal: this.showMentionModal,
            hideModal: this.hideMentionModal,
          },
        }, 
      },
      isShowModal: false,
      mode: 'simple', // or 'simple'
      isFocus: false
    }
  },
  watch: {
    editable(isEditable){
      if (isEditable){
        this.editor.enable()
      } else {
        this.editor.disable()
      }
    },
    content(newContent){
      this.html = newContent
    }
  },
  mounted() {
    // Simulate ajax async set HTMl content.
    // setTimeout(() => {
    //     this.html = '<p>Async set HTML content.</p>'
    // }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // Timely destroy editor !
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // Use `Object.seal`
      if (!this.editable){
        this.editor.disable()
      }
    },
    onChange(editor){
      const emitData = {
        textValue: editor.getText(),
        htmlValue: editor.getHtml() 
      }
      this.$emit('input-change', emitData)
    },
    onFocus(){
      // editor.dangerouslyInsertHtml(`<h1>Header1</h1><p>Hello <b>word</b></p>`)
      this.isFocus = true
    },
    onBlur(){
      this.isFocus = false
      this.$emit('lose-focus')
    },
    showMentionModal() {
      this.isShowModal = true
    },
    hideMentionModal() {
      this.isShowModal = false
    },
    insertMention(id, name) {
      const mentionNode = {
        type: 'mention', // 必须是 'mention'
        value: name,
        info: { id },
        children: [{ text: '' }], // 必须有一个空 text 作为 children
      }
      const editor = this.editor
      if (editor) {
        editor.restoreSelection() // 恢复选区
        editor.deleteBackward('character') // 删除 '@'
        editor.insertNode(mentionNode) // 插入 mention
        editor.move(1) // 移动光标
      }
    }
  }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css">
/* span {
  color: aqua !important;
} */
</style>
