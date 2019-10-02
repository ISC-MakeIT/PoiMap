<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    protected $table ='comments';
    protected $guarded = array('id');

    public static $rules = [
        'user_name' => 'required',
        'comment' => 'required',
    ];

    public function createData($request) {
        $comment = new comment;
        $comment->trash_box_id = $request->trash_box_id;
        $comment->user_name = $request->user_name;
        $comment->comment = $request->comment;
        $comment->save();
        return $comment;

    }

    public function trash_box()
    {
        return $this->belongsTo('App\trash_boxes');
    }
}
