<?php

namespace App\Http\Controllers;

use App\Models\Cert;
use Illuminate\Http\Request;

class CertController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cert = new Cert();
        $cert->user_id = $request->user_id;
        $cert->product_id = $request->product_id;
        $cert->quantity = $request->quantity ?? 1;
        $cert->save();
        return response()->json([
            'massage' => 'Product added to cert successfully',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cert $cert)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cert $cert)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cert $cert)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cert $cert)
    {
        //
    }

    public function certProducts($user_id)
    {
        $cert = Cert::where('user_id', $user_id)->get();
        return response()->json([
            'certProducts' => $cert,
        ], 200);
    }
}
