<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\District;
use Illuminate\Support\Facades\Auth;
use App\SalesItem;
use App\SalesImage;
use App\City;

class AdController extends Controller
{
    public function __construct(){
        $this->middleware("auth:api",["except"=>["index"]]);
    }

    public function index(){

        $SalesItems=SalesItem::with("salesImages")->get();
        return response()->json($SalesItems);

    }

    public function create(Request $request){

        $district=District::where("name",$request->district)->first();
        $city=District::where("name",$request->city)->first();
        if($district==null){
            $district=District::create([
                "name"=>$request->district
            ]);
            $district->save();
        }
        if($city==null){
            $city=City::create([
                "name"=>$request->city,
                "district_id"=>$district->id
            ]);
            $city->save();
        }

        $SalesItem=SalesItem::create([
            "city_id"=>$city->id,
            "user_id"=>Auth::user()->id,
            "title"=>$request->title,
            "description"=>$request->description,
            "saleType"=>$request->saleType,
            "saleSubType"=>$request->saleSubType,
            "price"=>$request->price,
            "title"=>$request->title,
        ]);

        $SalesItem->save();

        if($request->hasFile("file_one")){
            $this->SaveImage($request,"file_one",$SalesItem);
        }
        if($request->hasFile("file_two")){
            $this->SaveImage($request,"file_two",$SalesItem);
        }
        if($request->hasFile("file_three")){
            $this->SaveImage($request,"file_three",$SalesItem);
        }
        if($request->hasFile("file_four")){
            $this->SaveImage($request,"file_four",$SalesItem);
        }

        return response()->json([
            "message"=>"Ad created"
        ],200);

    }

    private function SaveImage(Request $request,$fileName,$SalesItem){
        $fileNameWithExtension=$request->file($fileName)->getclientOriginalName();
        $filename=pathinfo($fileNameWithExtension,PATHINFO_FILENAME);
        $extension=$request->file($fileName)->getClientOriginalExtension();
        $fileNameToStore=$filename."_".time().".".$extension;
        $path=$request->file($fileName)->storeAs("public/adcovers",$fileNameToStore);

        $SaleImage=SalesImage::create([
            "sales_item_id"=>$SalesItem->id,
            "image_url"=>$fileNameToStore
        ]);

        $SaleImage->save();

    }

}
