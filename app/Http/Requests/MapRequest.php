<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MapRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'user_name' => 'required|max:20',
            'comment' => 'required|max140',
        ];
    }

    public function messages() {
        return [
            'user_name.required' => '名前を入力して下さい。',
            'user_name.max' => '名前は二十文字以内で入力して下さい。',
            'comment.required' => 'コメントを入力して下さい。',
            'comment.max' => 'コメントは140文字以内で入力して下さい。'
        ];
    }
}
