<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class trash_box extends Model
{
    protected $table ='trash_boxes';
    protected $guarded = array('id');

    public static $rules = array(
        'lat' =>'required',
        'lng' =>'required',
        'location_name'=>'required',
        'image_url' => 'nullable'
    );

    public function getData() {
        $items = \DB::table('trash_boxes')
        ->select('trash_boxes.*','trash_type_boxes.types')
        ->join('trash_type_boxes','trash_boxes.id','=','trash_type_boxes.trash_box_id')
        ->OrderBy('id')
        ->get();
        return $items;
    }

    public function showData($id) {
        $items = \DB::table('trash_boxes')
        ->select('trash_boxes.*','trash_type_boxes.types')
        ->where('trash_boxes.id','=',$id)
        ->join('trash_type_boxes','trash_boxes.id','=','trash_type_boxes.trash_box_id')
        ->get();
        return $items;
    }


    public function trash_type_box() {
        return $this->hasmany('App\trash_type_box','trash_box_id');
    }

    public function comments() {
        return $this->hasMany('App\trash_type_box','trash_box_id');
    }
}
