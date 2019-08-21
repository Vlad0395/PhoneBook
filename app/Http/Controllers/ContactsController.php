<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function index()
    {
        $contacts = Contact::with('phones')->get();
        return response()->json($contacts);
    }


    /**
     * @param ContactRequest $request
     */
    public function create(ContactRequest $request)
    {
        $data = $request->validated();
        if ($data) {
            Contact::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'company' => $data['company'],
                'photo_contact' => $data['photo_contact'],
                'email' => $data['email'],
                'birth_day' => $data['birth_day'],
            ]);
        }
    }

    public function show($id)
    {
        //
    }

    public function update(ContactRequest $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
