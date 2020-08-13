<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('price');
            $table->string('discount');
            $table->string('discount_type');
            $table->string('sku')->nullable();
            $table->string('collection_id')->nullable();
            $table->string('vendor_id');
            $table->string('description');
            $table->string('category_id');
            $table->string('status');
            $table->string('seo_title');
            $table->string('seo_description');
            $table->string('social_title')->nullable();
            $table->string('social_description')->nullable();
            $table->string('sizes')->nullable();
            $table->string('materials')->nullable();
            $table->string('colors')->nullable();
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
        Schema::dropIfExists('products');
    }
}
