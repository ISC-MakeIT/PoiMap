<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Model\comment;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    // デバック用
    // public function index()
    // {
    //     $data = \DB::table('comments')->get();
    //     return $data;
    // }

    public function store(Request $request)
    {
        $comment = new comment();
        $comment = $comment->createData($request);
        return $comment;
    }

    public function show($trash_box_id)
    {
        $item = comment::where('trash_box_id', $trash_box_id)->get();
        return $item->toArray();
    }

    public function update(Request $request, $id)
    {
        $trash_box = comment::find($id);
        $form = $request->all();
        $trash_box->fill($form)->save();
        return $trash_box;
    }

    public function destroy($id)
    {
        comment::find($id)->delete();
    }
}
