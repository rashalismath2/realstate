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
    protected $query;
    public function __construct(){
        $this->middleware("auth:api",["except"=>["index","get"]]);
    }

    public function index(Request $request){

        $this->query = $request->all();

        if(
            array_key_exists('searchCity', $this->query) && 
            array_key_exists('saleType', $this->query) && 
            array_key_exists('searchMaxPrice', $this->query) && 
            array_key_exists('saleSubType', $this->query)
        ){
            $city=City::where("name",$this->query["searchCity"])->get();
            $SalesItems=SalesItem::with("salesImages")
            ->with("city")
            ->where("city_id",$city[0]->id)
            ->with("city.district")
            ->with("user")
            ->where("saleType",$this->query["saleType"])
            ->where("saleSubType",$this->query["saleSubType"])
            ->where("price","<",$this->query["searchMaxPrice"])
            ->get();
            return response()->json($SalesItems);
        }
        else if(
            array_key_exists('saleType', $this->query) && 
            array_key_exists('propertyType', $this->query)
        ){
            $SalesItems=SalesItem::with("salesImages")
            ->with("city")
            ->with("city.district")
            ->with("user")
            ->where("saleType",$this->query["saleType"])
            ->where("saleSubType",$this->query["propertyType"])
            ->get();
            return response()->json($SalesItems);
        }
        
        return response()->json();
     

    }

    public function getByUser(Request $request){
        $SalesItems=SalesItem::with("salesImages")
        ->with("city")
        ->with(["user"=>function($queryy){
            $queryy->where('id',Auth::user()->id);
        }])
        ->get();
        return response()->json($SalesItems);
    }

    public function get(Request $request,$id){


        $SalesItems=SalesItem::with("salesImages")
            ->with("city")
            ->with("user")
            ->where("id",$id)
            ->first();
        return response()->json($SalesItems);


    }

    public function create(Request $request){

        
        $district=District::where("name",$request->district)->first();
        $city=City::where("name",$request->city)->first();
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
        
        $user=Auth()->user();
        $user->contact_no=$request->contact;
        $user->save();

        if($request->hasFile("file_one")){
            $this->SaveImage($request,"file_one",$SalesItem,"save");
        }
        if($request->hasFile("file_two")){
            $this->SaveImage($request,"file_two",$SalesItem,"save");
        }
        if($request->hasFile("file_three")){
            $this->SaveImage($request,"file_three",$SalesItem,"save");
        }
        if($request->hasFile("file_four")){
            $this->SaveImage($request,"file_four",$SalesItem,"save");
        }

        return response()->json([
            "message"=>"Ad was created"
        ],200);

    }

    public function update(Request $request){

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


        $SalesItem=SalesItem::find($request->adId);
        $SalesItem->city_id=$city->id;
        $SalesItem->user_id=Auth::user()->id;
        $SalesItem->title=$request->title;
        $SalesItem->description=$request->description;
        $SalesItem->saleType=$request->saleType;
        $SalesItem->saleSubType=$request->saleSubType;
        $SalesItem->price=$request->price;
        $SalesItem->title=$request->title;

        $SalesItem->save();
        
        $user=Auth()->user();
        $user->contact_no=$request->contact;
        $user->save();

        if($request->hasFile("file_one")){
            $this->SaveImage($request,"file_one",$SalesItem,"update");
        }
        if($request->hasFile("file_two")){
            $this->SaveImage($request,"file_two",$SalesItem,"update");
        }
        if($request->hasFile("file_three")){
            $this->SaveImage($request,"file_three",$SalesItem,"update");
        }
        if($request->hasFile("file_four")){
            $this->SaveImage($request,"file_four",$SalesItem,"update");
        }

        return response()->json([
            "message"=>"Ad updated"
        ],200);
    }



    private function SaveImage(Request $request,$fileName,$SalesItem,$operation){

        if($operation=="update"){
            $images=SalesImage::where("sales_item_id",$SalesItem->id);
            $images->delete();
            foreach ($images as $index => $img) {
                Storage::delete("public/adcovers/".$img);
            }
        }

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

    public function delete(Request $request){

        $sales_item=SalesItem::find($request->id);
        
        $images=SalesImage::where("sales_item_id",$sales_item->id);
        $images->delete();
        foreach ($images as $index => $img) {
            Storage::delete("public/adcovers/".$img);
        }
        $sales_item->delete();

        
        return response()->json([
            "message"=>"Ad deleted"
        ],200);

    }

}
