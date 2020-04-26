<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SalesImages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_images', function (Blueprint $table) {
            $table->increments("id");
            $table->unsignedInteger("sales_item_id");
            $table->string("image_url");
            $table->foreign("sales_item_id")->references("id")->on("sales_items");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
