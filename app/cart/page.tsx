'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const handleCheckout = async () => {
    if (!user) {
      alert('Please login to proceed with checkout');
      return;
    }

    setIsCheckingOut(true);
    
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Order placed successfully! Payment method: ${paymentMethod.toUpperCase()}`);
    dispatch({ type: 'CLEAR_CART' });
    setIsCheckingOut(false);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
            <Link href="/">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm">{item.product.category}</p>
                      <p className="text-blue-600 font-bold">₱{item.product.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Checkout */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>{item.product.name} × {item.quantity}</span>
                    <span>₱{(item.product.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₱{state.total.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gcash" id="gcash" />
                    <Label htmlFor="gcash">GCash</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'gcash' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      You will be redirected to GCash to complete your payment.
                    </p>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 mb-2">
                      Bank Transfer Details:
                    </p>
                    <p className="text-xs text-green-700">
                      Account: TechStore<br />
                      Account Number: 1234567890<br />
                      Bank: Sample Bank
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {!user && (
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <p className="text-orange-800 text-sm mb-3">
                    Please login to proceed with checkout
                  </p>
                  <div className="flex space-x-2">
                    <Link href="/login">
                      <Button variant="outline" size="sm">Login</Button>
                    </Link>
                    <Link href="/register">
                      <Button size="sm">Register</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            <Button
              onClick={handleCheckout}
              className="w-full"
              size="lg"
              disabled={!user || isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Place Order'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}