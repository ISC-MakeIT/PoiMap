# コード規約

|改行コード|タブサイズ|
|:--|:--|
|CRLF|2|

# API仕様

| API一覧 |
| :-----: |

| No.  |  API名  |             API機能名             |                 機能概要                 |
| ---: | :------ | :-------------------------------- | :--------------------------------------- |
|    1 | Map     | [Map_index](#Map_index)           | マップのピンのデータ全件取得             |
|    2 | Map     | [Map_show](#Map_show)             | マップのピンのデータを条件を指定して取得 |
|    3 | Map     | [Map_store](#Map_store)           | マップのピンのデータ追加                 |
|    4 | Map     | [Map_update](#Map_update)         | マップのピンのデータ更新                 |
|    5 | Map     | [Map_delete](#Map_delete)         | マップのピンのデータ削除                 |
|    6 | Comment | [Comment_show](#Comment_show)     | 指定したピンのコメントを取得             |
|    7 | Comment | [Comment_store](#Comment_store)   | 指定したピンにコメントを追加             |
|    8 | Comment | [Comment_update](#Comment_update) | コメントの更新                           |
|    9 | Comment | [Comment_delete](#Comment_delete) | コメントの削除                           |


---


## Map



### Map_index
|   API機能名   |                            Map_index                             |
| :------------ | :--------------------------------------------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介                                              |
| 機能概要      | マップのピンのデータ全件取得。マップにピンを表示する場合に使用。 |

|     入力     |         |
| :----------: | :-----: |
| アクセスURL  | api/map |
| HTTPメソッド |   GET   |



#### 出力

| JSON  |
| :---: |

|   JSON Key    |      型      | サイズ | 必須  |      値の説明      |
| :-----------: | :----------: | :----: | :---: | :----------------: |
|      id       | unsigned int |   11   |  〇   |      ピンのID      |
|     types     |    string    |   4    |  〇   | 捨てられるゴミの種類 |
|      lat      |    double    |   15   |  〇   |    ゴミ箱の緯度    |
|      lng      |    double    |   15   |  〇   |    ゴミ箱の経度    |
| location_name |    string    |  200   |  〇   |   ゴミ箱の場所名   |
|   image_url   |    string    |  200   |       | ゴミ箱の画像のURL  |

---

### Map_show
|   API機能名   |                            Map_show                            |
| :------------ | :------------------------------------------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介                                            |
| 機能概要      | マップのピンのデータを条件を指定して取得。検索をする際に使用。 |

#### 入力

| アクセスURL  | api/map/{ピンのID} |
| :----------: | :----------------: |
| HTTPメソッド |        GET         |



#### 出力

| JSON  |
| :---: |


|   JSON Key    |      型      | サイズ |       値の説明       |
| :-----------: | :----------: | :----: | :------------------: |
|      id       | unsigned int |   11   |       ピンのID       |
|     types     |    string    |   4    | 捨てられるゴミの種類 |
|      lat      |    double    |   15   |     ゴミ箱の緯度     |
|      lng      |    double    |   15   |     ゴミ箱の経度     |
| location_name |    string    |  200   |    ゴミ箱の場所名    |
|   image_url   |    string    |  200   |  ゴミ箱の画像のURL   |
|  updated_at   |  timestamps  |        |        作成日        |
|  created_at   |  timestamps  |        |        更新日        |



### Map_store
|   API機能名   |         Map_store          |
| :------------ | :------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介        |
| 機能概要      | マップのピンのデータ追加。 |

#### 入力
| アクセスURL  | api/map |
| :----------: | :-----: |
| HTTPメソッド |  POST   |

| form  |
| :---: |

|     name      | 必須  |       値の説明       |
| :-----------: | :---: | :------------------: |
|      id       |  〇   |       ピンのID       |
|     types     |  〇   | 捨てられるゴミの種類 |
|      lat      |  〇   |     ゴミ箱の緯度     |
|      lng      |  〇   |     ゴミ箱の経度     |
| location_name |  〇   |    ゴミ箱の場所名    |
|   image_url   |       |  ゴミ箱の画像のURL   |

#### 出力
| JSON  |
| :---: |

|   JSON Key    |      型      | サイズ |       値の説明       |
| :-----------: | :----------: | :----: | :------------------: |
|      id       | unsigned int |   11   |       ピンのID       |
|     types     |    string    |   4    | 捨てられるゴミの種類 |
|      lat      |    double    |   15   |     ゴミ箱の緯度     |
|      lng      |    double    |   15   |     ゴミ箱の経度     |
| location_name |    string    |  200   |    ゴミ箱の場所名    |
|   image_url   |    string    |  200   |  ゴミ箱の画像のURL   |
|  updated_at   |  timestamps  |        |        作成日        |
|  created_at   |  timestamps  |        |        更新日        |



### Map_update
|   API機能名   |         Map_update         |
| :------------ | :------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介        |
| 機能概要      | マップのピンのデータ更新。 |

#### 入力
| アクセスURL  | api/map/{ピンのID} |
| :----------: | :----------------: |
| HTTPメソッド |        PUT         |

| form  |
| :---: |

|     name      | 必須  |            値の説明             |
| :-----------: | :---: | :-----------------------------: |
|    _method    |  〇   | PUTメソッドを使用するために追加 |
|      id       |  〇   |            ピンのID             |
|     types     |  〇   |      捨てられるゴミの種類       |
|      lat      |  〇   |          ゴミ箱の緯度           |
|      lng      |  〇   |          ゴミ箱の経度           |
| location_name |  〇   |         ゴミ箱の場所名          |
|   image_url   |       |        ゴミ箱の画像のURL        |

#### 出力
| JSON  |
| :---: |

|   JSON Key    |      型      | サイズ |       値の説明       |
| :-----------: | :----------: | :----: | :------------------: |
|      id       | unsigned int |   11   |       ピンのID       |
|     types     |    string    |   4    | 捨てられるゴミの種類 |
|      lat      |    double    |   15   |     ゴミ箱の緯度     |
|      lng      |    double    |   15   |     ゴミ箱の経度     |
| location_name |    string    |  200   |    ゴミ箱の場所名    |
|   image_url   |    string    |  200   |  ゴミ箱の画像のURL   |
|  updated_at   |  timestamps  |        |        作成日        |
|  created_at   |  timestamps  |        |        更新日        |



### Map_delete
|   API機能名   |         Map_delete         |
| :------------ | :------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介        |
| 機能概要      | マップのピンのデータ削除。 |

#### 入力
| アクセスURL  | api/map/{ピンのID} |
| :----------: | :----------------: |
| HTTPメソッド |       DELETE       |


| form  |
| :---: |

|  name   | 必須  |              値の説明              |
| :-----: | :---: | :--------------------------------: |
| _method |  〇   | DELETEメソッドを使用するために追加 |



## Comment



### Comment_show
|   API機能名   |         Comment_show         |
| :------------ | :--------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介          |
| 機能概要      | 指定したピンのコメントを取得 |

#### 入力
| アクセスURL  | api/comment/{ピンのID} |
| :----------: | :--------------------: |
| HTTPメソッド |          GET           |



#### 出力
| JSON  |
| :---: |


|   JSON Key   |      型      | サイズ |           値の説明           |
| :----------: | :----------: | :----: | :--------------------------: |
|      id      | unsigned int |   11   |         コメントのID         |
| trash_box_id | unsigned int |   11   |  コメントの書かれているピン  |
|  user_name   |    string    |   20   | コメントを投稿するユーザー名 |
|   comment    |    string    |  140   |           コメント           |
|  updated_at  |  timestamps  |        |            作成日            |
|  created_at  |  timestamps  |        |            更新日            |



### Comment_store
|   API機能名   |        Comment_store         |
| :------------ | :--------------------------- |
| 更新日/更新者 | 2019/10/06 篠田陽介          |
| 機能概要      | 指定したピンにコメントを追加 |

#### 入力
| アクセスURL  | api/comment/{ピンのID} |
| :----------: | :--------------------: |
| HTTPメソッド |          POST          |

| form  |
| :---: |

|     name     | 必須  |           値の説明           |
| :----------: | :---: | :--------------------------: |
|      id      |  〇   |         コメントのID         |
| trash_box_id |  〇   |  コメントの書かれているピン  |
|  user_name   |  〇   | コメントを投稿するユーザー名 |
|   comment    |  〇   |           コメント           |


#### 出力
| JSON  |
| :---: |

|   JSON Key   |      型      | サイズ |           値の説明           |
| :----------: | :----------: | :----: | :--------------------------: |
|      id      | unsigned int |   11   |         コメントのID         |
| trash_box_id | unsigned int |   11   |  コメントの書かれているピン  |
|  user_name   |    string    |   20   | コメントを投稿するユーザー名 |
|   comment    |    string    |  140   |           コメント           |
|  updated_at  |  timestamps  |        |            作成日            |
|  created_at  |  timestamps  |        |            更新日            |



### Comment_update
|   API機能名   |   Comment_update    |
| :------------ | :------------------ |
| 更新日/更新者 | 2019/10/06 篠田陽介 |
| 機能概要      | コメントの更新      |

#### 入力
| アクセスURL  | api/comment/{コメントのID} |
| :----------: | :------------------------: |
| HTTPメソッド |            PUT             |

| form  |
| :---: |

|     name     | 必須  |            値の説明             |
| :----------: | :---: | :-----------------------------: |
|   _method    |  〇   | PUTメソッドを使用するために追加 |
|      id      |  〇   |          コメントのID           |
| trash_box_id |  〇   |   コメントの書かれているピン    |
|  user_name   |  〇   |  コメントを投稿するユーザー名   |
|   comment    |  〇   |            コメント             |


#### 出力
| JSON  |
| :---: |

|   JSON Key   |      型      | サイズ |           値の説明           |
| :----------: | :----------: | :----: | :--------------------------: |
|      id      | unsigned int |   11   |         コメントのID         |
| trash_box_id | unsigned int |   11   |  コメントの書かれているピン  |
|  user_name   |    string    |   20   | コメントを投稿するユーザー名 |
|   comment    |    string    |  140   |           コメント           |
|  updated_at  |  timestamps  |        |            作成日            |
|  created_at  |  timestamps  |        |            更新日            |



### Map_delete
|   API機能名   |     Map_delete      |
| :------------ | :------------------ |
| 更新日/更新者 | 2019/10/06 篠田陽介 |
| 機能概要      | コメントの削除。    |

#### 入力
| アクセスURL  | api/map/{コメントのID} |
| :----------: | :--------------------: |
| HTTPメソッド |         DELETE         |


| form  |
| :---: |

|  name   | 必須  |              値の説明              |
| :-----: | :---: | :--------------------------------: |
| _method |  〇   | DELETEメソッドを使用するために追加 |

---
### フォームに_methodを追加する際
#### DELETEメソッドの場合
| 属性 |  値  |
| :--: | :-: |
| type | hidden |
| name | _method |
| value | DELETE |
 ```html
 <input type="hidden" name="_method" value="DELETE">
```
 
