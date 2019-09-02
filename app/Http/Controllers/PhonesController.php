<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhoneRequest;
use App\Phone;
use Illuminate\Http\Request;

class PhonesController extends Controller
{
    public function index($id)
    {
        $phones = Phone::where('contact_id', $id)->first();
        return response()->json($phones);
    }

    /**
     * @param PhoneRequest $request
     */
    public function create(PhoneRequest $request)
    {
        $data = $request->validated();
        if ($data) {
            $phone = Phone::create([
                'number' => $data['number'],
                'contact_id' => $data['contact_id'],
            ]);
        }
        return response()->json($phone ?? null);
    }

    public function update(PhoneRequest $request, $id)
    {
        $phone = Phone::find($id)->first();

        $data = $request->validated();
        if ($data) {
            $phone->update([
                'number' => $data['number'],
                'contact_id' => $data['contact_id'],
            ]);
        }
        return response()->json($phone ?? null);
    }
}
