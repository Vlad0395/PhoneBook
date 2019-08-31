<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\ContactRequest;
use DateTime;
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

        $conv_day_birth = new DateTime($data['birth_day']);

        if ($data) {
            Contact::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'company' => $data['company'],
                'photo_contact' => $data['photo_contact'],
                'email' => $data['email'],
                'birth_day' => $conv_day_birth
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
