<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_items', function (Blueprint $table) {
            $table->increments("id");
            $table->unsignedInteger("city_id");
            $table->unsignedInteger("user_id");
            $table->string("title");
            $table->string("description");
            $table->string("saleType");
            $table->string("saleSubType");
            $table->integer("price");
            $table->foreign("city_id")->references("id")->on("cities");
            $table->foreign("user_id")->references("id")->on("users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_items');
    }
}
