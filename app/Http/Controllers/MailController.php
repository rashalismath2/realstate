<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Mail\LoanQuote;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function __construct(){
    }

    public function send(Request $request){

        $user=new User();
        $user->first_name=$request->fullName;
        $user->email=$request->email;
        $user->phone=$request->phone;

        Mail::to($request->email)->send(new LoanQuote($user));

        return response("Done!",200);
    }
}
