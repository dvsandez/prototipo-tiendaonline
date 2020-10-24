<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::get();
        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'images' => 'image'
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->trademark = $request->trademark;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->unit_of_measurement = $request->unit_of_measurement;
        $product->category = $request->category;
        $product->description = $request->description;
        if($request->hasFile('images')){
            $images = $request->file('images');
            //$namefile = str_replace(" ", "", time().'_'.$images->getClientOriginalName());
            //$images->move('uploads', $namefile);
            $product->images = str_replace("public/", "", $images->store("public"));
        }
        $product->stock = 0;
        $product->save();
        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        Product::whereId($request->id)->update([
            'name' => $request->name,
            'trademark' => $request->trademark,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'unit_of_measurement' => $request->unit_of_measurement,
            'category' => $request->category,
            'images' => "",
            'stock' => 0
        ]);
        return $request->id;
    }

    /**
     * Remove the specified resource from storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($product)
    {
        $product = Product::find($product);
        $product->delete();
        return 2;
    }
}
