<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\ContactRequest;
use DateTime;
use Exception;
use Illuminate\Http\JsonResponse;

class ContactsController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index()
    {
        $contacts = Contact::with('phones')->get();
        return response()->json($contacts);
    }


    /**
     * @param ContactRequest $request
     * @return JsonResponse
     * @throws Exception
     */
    public function create(ContactRequest $request)
    {
        $data = $request->validated();

        $conv_day_birth = new DateTime($data['birth_day']);

        if ($data) {
            $contact = Contact::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'company' => $data['company'],
                'photo_contact' => $data['photo_contact'],
                'email' => $data['email'],
                'birth_day' => $conv_day_birth
            ]);
        }
        return response()->json($contact ?? null);
    }

    public function show($id)
    {
        //
    }

    /**
     * @param ContactRequest $request
     * @param $id
     * @return JsonResponse
     * @throws Exception
     */
    public function update(ContactRequest $request, $id)
    {
        $contact = Contact::find($id);
        $data = $request->validated();

        $conv_day_birth = new DateTime($data['birth_day']);

        if ($data) {
            $contact->update([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'company' => $data['company'],
                'photo_contact' => $data['photo_contact'],
                'email' => $data['email'],
                'birth_day' => $conv_day_birth
            ]);
        }
        return response()->json($contact);
    }


    /**
     * @param $id
     * @return int
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();
        return response()->json($id);
    }
}
