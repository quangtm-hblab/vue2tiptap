<template>
  <div class="cmt-h-[700px] cmt-w-[500px]">
    <div
      class="cmt-bg-bgGray cmt-flex cmt-flex-col"
      style="height: calc(100% - 48px)"
    >
      <div class="cmt-h-full cmt-pl-4 cmt-overflow-auto flex-grow">
        <ThreadItem 
          v-for="item in fakeListComment"
          :key="item.id"
          :thread-item-data="item" 
        />
      </div>
      <hr />
      <div
        class="cmt-bg-bgGray cmt-py-6 cmt-px-4 cmt-border-t-[1px] cmt-border-gray-300 cmt-w-full"
      >
        <div v-if="!isCommenting">
          <button
            @click="onShowCreateComment"
            class="cmt-border cmt-border-black cmt-bg-bgGray cmt-py-1 cmt-px-4"
          >
            新規コメント
          </button>
        </div>
        <div v-else>
          <CreateComment @input-lose-focus="handleInputLoseFocus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThreadItem from "./components/ThreadItem.vue"
import CreateComment from "./components/CreateComment.vue";
export default {
  components: {
    CreateComment,
    ThreadItem,
  },
  data() {
    return {
      isCommenting: false,
    };
  },
  computed: {
    //fake data comment
    fakeListComment() {
      return this.$store.state.comments;
    },
  },
  created() {
    this.$store.dispatch("fetchComments");
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    onShowCreateComment() {
      this.isCommenting = true;
    },
    handleInputLoseFocus() {
      this.isCommenting = false;
    },
  },
};
</script>
