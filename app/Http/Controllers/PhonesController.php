<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhoneRequest;
use App\Phone;
use Illuminate\Http\JsonResponse;

class PhonesController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function index()
    {
        $phones = Phone::all();
        return response()->json($phones);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $phones = Phone::where('contact_id', $id)->first();
        return response()->json($phones);
    }

    /**
     * @param PhoneRequest $request
     * @return JsonResponse
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

    /**
     * @param PhoneRequest $request
     * @param $id
     * @return JsonResponse
     */
    public function update(PhoneRequest $request, $id)
    {
        $phone = Phone::find($id);

        $data = $request->validated();
        if ($data) {
            $phone->update([
                'number' => $data['mobile'],
                'contact_id' => $data['contact_id'],
            ]);
        }
        return response()->json($phone);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $phone = Phone::find($id);
        $phone->delete();
        return response()->json($id);
    }
}
