<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Model\trash_box;
use App\Model\trash_type_box;
use App\Http\Controllers\Controller;

class MapController extends Controller
{
    public function index()
    {
        $trash_box = new trash_box();
        $data = $trash_box->getData();
        return $data;
    }

    public function store(Request $request)
    {
        // $new_id = \DB::table('trash_boxes')->insert(['lat' => $request->lat,'lng' => $request->lng,'location_name' => $request->location_name,'image_url' => $request->image_url]);
        // \DB::table('trash_type_boxes')->insert(['types' => $request->types,'trash_box_id' => $new_id]);

        // return redirect("api/map/".$new_id);
        $trash_box = new trash_box();
        $id = $trash_box->createData($request);

        return redirect("api/map/".$id);
    }

    public function show($id)
    {
        $trash_box = new trash_box();
        $data = $trash_box->showData($id);
        return $data;
    }

    public function update(Request $request, $id)
    {
        $trash_box = trash_box::find($id);
        $data = trash_type_box::where('trash_box_id',$id)->first();
        $trash_box->lat = $request->lat;
        $trash_box->lng = $request->lng;
        $trash_box->location_name = $request->location_name;
        $trash_box->image_url = $request->image_url;
        $data->types = $request->types;
        $trash_box->save();
        $data->save();
        return redirect("api/map/".$id);
    }

    public function destroy($id)
    {
        trash_box::find($id)->delete();
        return redirect("api/map");

    }
}
