export const listMember = [
  {id: 1, name: 'quang', email:'quang@gmail.com'},
  {id: 2, name: 'quang2', email:'quang2@gmail.com'},
  {id: 3, name: 'test', email:'test@gmail.com'},
  {id: 4, name: 'test1', email:'test1@gmail.com'},
  {id: 5, name: 'bce', email:'bce@gmail.com'},
  {id: 6, name: 'alo', email:'alo@gmail.com'},
  {id: 7, name: '123', email:'123@gmail.com'},
  {id: 8, name: 'quang3', email:'quang3@gmail.com'},
  {id: 9, name: 'quangoke', email:'quangoke@gmail.com'},
  {id: 10, name: 'croass', email:'croass@gmail.com'},
]

export const listComment = [
  {
    id: "c1324036-3a9e-425e-a7ae-18a9ff40feec",
    message: "<p><span class=\"mention\">@Lea quang</span> comment</p>",
    creatorInfo: {
      id: "d65e13b1-f274-4708-96fb-18096f1a5beb",
      mailAddress: "apm-dxpf-dev014@fujifilm.com",
      name: "統合 十四",
    },
    createdAt: "2024-01-22T03:09:20.960Z",
    mentionTo: [],
    unread: true,
    isMentioned: false,
  },
  {
    id: "107b5057-be97-4ffb-a838-9737384176c5",
    message: "<p>Comment 1 </p>",
    creatorInfo: {
      id: "e09f20f9-77a8-4e65-afe1-90fd233c5914",
      mailAddress: "apm-dxpf-dev012@fujifilm.com",
      name: "統合 十二",
    },
    createdAt: "2024-01-17T03:25:48.017Z",
    mentionTo: [],
    unread: false,
    isMentioned: true,
    replyLatest: {
      createdAt: "2024-01-22T08:15:59.363Z",
      mentionTo: ["allAccessUser"],
      text: "全員 test mention 2",
      message:
        '<p><span data-w-e-type="mention" class = "mention" data-w-e-is-void data-w-e-is-inline data-value="全員" data-info="%22allAccessUser%22">全員</span> test mention 2</p>',
      id: "2af384b8-2ff6-4e57-9bfb-25068be54c33",
      unread: true,
      isMentioned: true,
      creatorInfo: {
        id: "8854019d-05dc-4422-a11a-78ea3f4c66ad",
        mailAddress: "apm-dxpf-dev022@fujifilm.com",
        name: "統合 二十二",
      },
    },
    replyTotal: 6,
  },
  {
    id: "d6dacc21-423e-4f47-a8a7-8e8d3d256034",
    message:
      '<p><span data-w-e-type="mention" class = "mention" data-w-e-is-void data-w-e-is-inline data-value="全員" data-info="%22allAccessUser%22">全員</span> mention test</p>',
    creatorInfo: {
      id: "8854019d-05dc-4422-a11a-78ea3f4c66ad",
      mailAddress: "apm-dxpf-dev022@fujifilm.com",
      name: "統合 二十二",
    },
    createdAt: "2024-01-22T08:14:54.210Z",
    mentionTo: ["allAccessUser"],
    unread: false,
    isMentioned: false,
    replyLatest: {
      createdAt: "2024-01-22T08:23:50.842Z",
      mentionTo: [],
      text: "test comment 2",
      message: "<p>test comment 2</p>",
      id: "9239e717-9773-4a76-b215-b4a8212e59a6",
      unread: false,
      creatorInfo: {
        id: "8854019d-05dc-4422-a11a-78ea3f4c66ad",
        mailAddress: "apm-dxpf-dev022@fujifilm.com",
        name: "統合 二十二",
      },
    },
    replyTotal: 2,
  },
  {
    id: "009ac553-00d2-473c-9ec3-a5a1d27bbff1",
    message: "<p>hello 22</p>",
    creatorInfo: {
      id: "fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9",
      mailAddress: "apm-dxpf-dev021@fujifilm.com",
      name: "統合 二十一",
    },
    createdAt: "2024-01-22T08:49:48.995Z",
    mentionTo: [],
    unread: false,
    isMentioned: true,
    replyLatest: {
      createdAt: "2024-01-22T08:50:24.044Z",
      mentionTo: ["fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9"],
      text: "hello 統合 二十一",
      message:
        '<p>hello <span data-w-e-type="mention" class = "mention" data-w-e-is-void data-w-e-is-inline data-value="統合 二十一" data-info="%22fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9%22">統合 二十一</span></p>',
      id: "bdba8eac-948c-4d82-a59f-028b497a955d",
      unread: true,
      creatorInfo: {
        id: "8854019d-05dc-4422-a11a-78ea3f4c66ad",
        mailAddress: "apm-dxpf-dev022@fujifilm.com",
        name: "統合 二十二",
      },
    },
    replyTotal: 1,
  },
  {
    id: "0be795e2-60d0-4a91-ac58-aa9978092367",
    message: "<p>new comment </p>",
    creatorInfo: {
      id: "e09f20f9-77a8-4e65-afe1-90fd233c5914",
      mailAddress: "apm-dxpf-dev012@fujifilm.com",
      name: "統合 十二",
    },
    createdAt: "2024-01-19T07:04:56.642Z",
    mentionTo: [],
    unread: false,
    isMentioned: false,
    replyLatest: {
      createdAt: "2024-01-23T02:16:30.798Z",
      mentionTo: [],
      text: "reply 6",
      message: "<p>reply 6</p>",
      id: "85a642ed-2f0a-482e-9781-26faa8cc21b2",
      unread: true,
      creatorInfo: {
        id: "fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9",
        mailAddress: "apm-dxpf-dev021@fujifilm.com",
        name: "統合 二十一",
      },
    },
    replyTotal: 5,
  },
  {
    id: "c16ed8ea-079e-47fb-a717-cfb0a8dc999e",
    message:
      '<p><span data-w-e-type="mention" class = "mention" data-w-e-is-void data-w-e-is-inline data-value="統合 二十一" data-info="%22fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9%22">統合 二十一</span>123123123123123</p>',
    creatorInfo: {
      id: "8854019d-05dc-4422-a11a-78ea3f4c66ad",
      mailAddress: "apm-dxpf-dev022@fujifilm.com",
      name: "統合 二十二",
    },
    createdAt: "2024-01-23T02:36:41.722Z",
    mentionTo: ["fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9"],
    unread: true,
    isMentioned: false,
  },
  {
    id: "a3fcd4a8-c888-4953-80f7-65413a49a823",
    message: "<p>123123123123123123</p>",
    creatorInfo: {
      id: "8854019d-05dc-4422-a11a-78ea3f4c66ad",
      mailAddress: "apm-dxpf-dev022@fujifilm.com",
      name: "統合 二十二",
    },
    createdAt: "2024-01-23T02:37:52.325Z",
    mentionTo: [],
    unread: true,
    isMentioned: false,
  },
]

export const listReply = [
  {
    id: 'c1324036-3a9e-425e-a7ae-18a9ff40feec',
    message: 'new comment',
    creatorInfo: {
      id: 'd65e13b1-f274-4708-96fb-18096f1a5beb',
      mailAddress: 'apm-dxpf-dev014@fujifilm.com',
      name: '統合 十四'
    },
    createdAt: '2024-01-22T03:09:20.960Z',
    mentionTo: [],
    unread: false,
    isMentioned: false
  },
  {
    id: '107b5057-be97-4ffb-a838-9737384176c5',
    message: 'Comment 1',
    creatorInfo: {
      id: 'e09f20f9-77a8-4e65-afe1-90fd233c5914',
      mailAddress: 'apm-dxpf-dev012@fujifilm.com',
      name: '統合 十二'
    },
    createdAt: '2024-01-17T03:25:48.017Z',
    mentionTo: [],
    unread: false,
    isMentioned: true,
  },
  {
    id: 'd6dacc21-423e-4f47-a8a7-8e8d3d256034',
    message: '<p><span data-w-e-type="mention" class = "mention" data-w-e-is-void data-w-e-is-inline data-value="全員" data-info="%22allAccessUser%22">全員</span> mention test</p>',
    creatorInfo: {
      id: '8854019d-05dc-4422-a11a-78ea3f4c66ad',
      mailAddress: 'apm-dxpf-dev022@fujifilm.com',
      name: '統合 二十二'
    },
    createdAt: '2024-01-22T08:14:54.210Z',
    mentionTo: [
      'allAccessUser'
    ],
    unread: false,
    isMentioned: false,
  },
  {
    id: '009ac553-00d2-473c-9ec3-a5a1d27bbff1',
    message: '<p>hello 22</p>',
    creatorInfo: {
      id: 'fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9',
      mailAddress: 'apm-dxpf-dev021@fujifilm.com',
      name: '統合 二十一'
    },
    createdAt: '2024-01-22T08:49:48.995Z',
    mentionTo: [],
    unread: false,
    isMentioned: true,
  },
  {
    id: '0be795e2-60d0-4a91-ac58-aa9978092367',
    message: '<p>new comment </p>',
    creatorInfo: {
      id: 'e09f20f9-77a8-4e65-afe1-90fd233c5914',
      mailAddress: 'apm-dxpf-dev012@fujifilm.com',
      name: '統合 十二'
    },
    createdAt: '2024-01-19T07:04:56.642Z',
    mentionTo: [],
    unread: false,
    isMentioned: false,
  },
  {
    id: 'c16ed8ea-079e-47fb-a717-cfb0a8dc999e',
    message: '<p><span data-w-e-type="mention" class = "mention" data-w-e-is-void data-w-e-is-inline data-value="統合 二十一" data-info="%22fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9%22">統合 二十一</span>123123123123123</p>',
    creatorInfo: {
      id: '8854019d-05dc-4422-a11a-78ea3f4c66ad',
      mailAddress: 'apm-dxpf-dev022@fujifilm.com',
      name: '統合 二十二'
    },
    createdAt: '2024-01-23T02:36:41.722Z',
    mentionTo: [
      'fae01a9e-a79c-4e1b-b68b-ac3c4bbd02f9'
    ],
    unread: false,
    isMentioned: false
  },
  {
    id: 'a3fcd4a8-c888-4953-80f7-65413a49a823',
    message: '<p>123123123123123123</p>',
    creatorInfo: {
      id: '8854019d-05dc-4422-a11a-78ea3f4c66ad',
      mailAddress: 'apm-dxpf-dev022@fujifilm.com',
      name: '統合 二十二'
    },
    createdAt: '2024-01-23T02:37:52.325Z',
    mentionTo: [],
    unread: true,
    isMentioned: true
  }
]

export const commentItem = {
  id: 0,
  message: 'testComment',
  creatorInfo: {
    id: "d65e13b1-f274-4708-96fb-18096f1a5beb",
    mailAddress: "apm-dxpf-dev014@fujifilm.com",
    name: "統合 十四",
  },
  createdAt: "2024-01-22T03:09:20.960Z",
  mentionTo: [],
  unread: true,
  isMentioned: false,
}