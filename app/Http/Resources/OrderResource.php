<?php

namespace App\Http\Resources;

use App\Address;
use App\Payment;
use App\Product;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

use function GuzzleHttp\json_decode;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $orders = parent::toArray($request);
        $orders['user'] = User::find($this->user_id)->first();
        $orders['payment'] = Payment::find($this->payment_id)->first();
        $orders['address'] = Address::find($this->address_id)->first();
        $orders['products'] = new ProductResourceCollection(Product::whereIn('id', json_decode($this->products_list))->get());
        return $orders;
    }

}
