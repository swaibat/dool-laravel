<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['sale', 'discount', 'free_shipping', 'buy_x_get_y']);
            $table->string('code');
            $table->string('offer');
            $table->string('valid_from');
            $table->string('valid_to')->nullable();
            $table->enum('apply_to', ['all_products', 'specific_products', 'specific_collection']);
            $table->jsonb('apply_value')->nullable();
            $table->string('buy_x_get_y')->nullable();
            $table->string('uses_limit')->nullable();
            $table->bigInteger('user_id')->unsigned()->index()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('coupons');
    }
}
