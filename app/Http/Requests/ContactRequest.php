<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
//    dd($this->request->all());
        return [
            'first_name' => 'required|max:255',
            'last_name' => 'max:255',
            'photo_contact' => '',
            'birth_day' => 'required',
            'number' =>' max:12',
            'email' => 'required|unique:phone_book_contact,id|max:255',
            'company' => 'max:255',
        ];
    }
}
