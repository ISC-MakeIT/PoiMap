<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->truncate();
        $param = [
            'trash_box_id' => 1,
            'user_name'=> "salami",
            'comment' => "分かりやすい場所にあっていいですね。",
            'created_at' => "2019-01-02 17:50:30",
            'updated_at' => "2019-01-02 18:38:31",
        ];
        DB::table('comments')->insert($param);

        $param = [
            'trash_box_id' => 2,
            'user_name'=> "masaya",
            'comment' => "各階にあるのがいい。",
            'created_at' => "2019-01-02 17:50:31",
            'updated_at' => "2019-01-02 18:38:32",
        ];
        DB::table('comments')->insert($param);

        $param = [
            'trash_box_id' => 3,
            'user_name'=> "makkori",
            'comment' => "いつもキレイ。",
            'created_at' => "2019-01-02 17:50:32",
            'updated_at' => "2019-01-02 18:38:33",
        ];
        DB::table('comments')->insert($param);

        $param = [
            'trash_box_id' => 1,
            'user_name'=> "shino",
            'comment' => "ちょっと汚い。",
            'created_at' => "2019-01-02 17:50:33",
            'updated_at' => "2019-01-02 18:38:34",
        ];
        DB::table('comments')->insert($param);

    }
}
