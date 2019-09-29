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
    public function trash_box()
    {
        return $this->belongsTo('App\trash_boxes');
    }
}
