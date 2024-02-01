<template>
  <editor-content :editor="editor" />
</template>

<script>
import Mention from "@tiptap/extension-mention";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-2";

import suggestion from "./suggestion.js";

import Link from "@tiptap/extension-link";

export default {
  emits: ["input-text", "lose-focus"],
  props: {
    value: {
      type: String,
      default: "",
    },
    editable: Boolean,
    autoFocus: Boolean,
  },
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
    editable(newVal) {
      console.log(newVal);
      this.editor.setEditable(newVal);
      if (newVal) {
        this.editor.chain().focus().run();
      }
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Mention.configure({
          HTMLAttributes: {
            class: "mention",
          },
          suggestion,
        }),
        Link.configure({
          openOnClick: true,
        }),
      ],
      content: this.value,
      autofocus: this.autoFocus,
      onUpdate: () => {
        // HTML
        this.$emit("input", this.editor.getHTML());

        // JSON
        this.$emit("input-text", this.editor.getText());
      },
      onBlur: () => {
        this.$emit("lose-focus");
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style>
.mention {
  padding: 0.1rem 0.3rem;
  box-decoration-break: clone;
  color: orange;
}

a {
  color: #68cef8 !important;
}

code {
  font-size: 0.9rem;
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: rgba(#616161, 0.1);
  color: #616161;
  box-decoration-break: clone;
}
</style>
