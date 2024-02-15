<template>
  <div
    id="mention-modal"
    :style="{ top: top, left: left }"
    class="cmt-z-50 cmt-absolute">
    <input
      id="mention-input"
      ref="input"
      v-model="searchVal"
      @keyup="inputKeyupHandler">
    <ul id="mention-list">
      <li
        v-for="item in searchedList"
        :key="item.id"
        @click="insertMentionHandler(item.id, item.name, item.email)">
        <div>{{ item.name }}</div>
        <div class="cmt-text-sm">{{ item.email }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MentionModal',
  data() {
    return {
      // 定位信息
      top: '',
      left: '',

      // list 信息
      searchVal: '',
      list: [
        // { id: 'a', name: 'A张三' },
        // { id: 'b', name: 'B李四' },
        // { id: 'c', name: 'C小明' },
        // { id: 'd', name: 'D小李' },
        // { id: 'e', name: 'E小红' },
      ]
    }
  },
  computed: {
    // 根据 <input> value 筛选 list
    searchedList() {
      const searchVal = this.searchVal.trim().toLowerCase()
      return this.list.filter(item => {
        const email = item.email.toLowerCase()
        if (email.indexOf(searchVal) >= 0) {
          return true
        }
        return false
      })
    }
  },
  created() {
    this.list = this.$store.state.members
  },
  mounted() {
    // 获取光标位置
    const domSelection = document.getSelection()
    const domRange = domSelection?.getRangeAt(0)
    if (domRange == null) return
    const rect = domRange.getBoundingClientRect()

    // 定位 modal
    this.top = '50px'
    this.left = `${rect.left + 5}px`

    // focus input
    this.$refs.input.focus()
  },
  methods: {
    inputKeyupHandler(event) {
      // esc - 隐藏 modal
      if (event.key === 'Escape') {
        this.$emit('hideMentionModal')
      }

      // enter - 插入 mention node
      if (event.key === 'Enter') {
        // 插入第一个
        const firstOne = this.searchedList[0]
        if (firstOne) {
          const { id, name } = firstOne
          this.insertMentionHandler(id, name)
        }
      }
    },
    insertMentionHandler(id, name) {
      this.$emit('insertMention', id, name)
      this.$emit('hideMentionModal') // 隐藏 modal
    }
  },

}
</script>

<style>
#mention-modal {
  position: absolute;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 5px;
}

#mention-modal input {
  width: 100px;
  outline: none;
}

#mention-modal ul {
  padding: 0;
  margin: 0;
}

#mention-modal ul li {
  list-style: none;
  cursor: pointer;
  padding: 3px 0;
  text-align: left;
}

#mention-modal ul li:hover {
background-color: rgb(185, 184, 184);
}
</style>