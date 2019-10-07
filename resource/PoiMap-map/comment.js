const info = document.getElementById('informaion');

const comments = [
  { comment: '球にあふれてる時がある。本当にこういうのはなしにしてほしい', created_at: '2019/04/01' },
  { comment: 'いやあ、ほんとマジであり得ない。このごみ箱に、半分以上飲みかけのタピオカジュースが入ってた。そのせいで手がびしょびしょ……ほんと買うのなら飲み切ってほしい', created_at: '2019/04/25' },
  { comment: '瓶・缶・ペット・燃えるゴミとりあえず行けばなんでも捨てれるから横浜ついたらとりあえず捨てに行ってるかな？', created_at: '2019/05/04' },
  { comment: '夜はゴミがあふれてる……', created_at: '2019/05/12' },
  { comment: 'この場所にはタカラが眠ってる。これだからゴミあさりはやめられねえ。', created_at: '2019/05/15' },
  { comment: 'うわあ、気持ち悪……', created_at: '2019/05/15'},
  { comment: 'よいゴミ箱です!', created_at: '2019/08/12' },
  { comment: 'よいゴミ箱です!', created_at: '2019/08/15' },
  { comment: 'ダメなゴミ箱です!', created_at: '2019/08/17' },
  { comment: 'よいゴミ箱です!', created_at: '2019/08/18' },
  { comment: 'よいゴミ箱です!', created_at: '2019/08/19' }
];

const commentBox = document.createElement('div');
commentBox.className = 'comment-box';

for (let i = 0; i < comments.length; i++) {
  const comment = document.createElement('div');
  comment.className = 'comment';

  const boxRight = document.createElement('div');
  boxRight.className = 'comment-box-right';

  const users = document.createElement('div');
  users.className = 'users-icon';

  const newComment = document.createElement('p');
  newComment.className = 'comment-text';
  newComment.innerText = comments[i].comment;

  const newCommentTime = document.createElement('p');
  newCommentTime.className = 'comment-time';
  newCommentTime.innerHTML = comments[i].created_at;

  info.appendChild(commentBox);
  commentBox.appendChild(comment);
  comment.appendChild(users);
  comment.appendChild(boxRight);
  boxRight.appendChild(newComment);
  boxRight.appendChild(newCommentTime);
}
