import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Users, Award, Truck } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Store,
      title: "Quality Products",
      description:
        "We offer only the highest quality tech products from trusted brands.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do. Your satisfaction is our priority.",
    },
    {
      icon: Award,
      title: "Best Prices",
      description:
        "Competitive pricing without compromising on quality or service.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery to get your products to you as soon as possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
        style={{
          backgroundImage: "url('/Fishball_Tarpauline.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            About Tatay Jovy Fishbolan
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow">
            Your #1 source for the best fishball sauce in Malolos since 1999.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                NagSimula ang Tatay Jovy Fishbolan noong 1999 sa Malolos,
                Bulacan. Mula sa isang maliit na tindahan, unti-unting lumago
                ang aming negosyo dahil sa dedikasyon at pagmamahal sa paggawa
                ng masarap na fishball sauce.
              </p>
              <p className="mb-6">
                Nakapagpatapos si tatay Jovy ng kanyang mga anak sa pamamagitan
                ng kita mula sa negosyo. Ang aming fishball sauce ay naging
                paborito ng mga lokal at patuloy na lumalago ang aming
                reputasyon.
              </p>
              <p>
                Today, maglalaunch kami ng online store upang mas mapadali ang
                pag-order ng aming mga produkto. Layunin naming maabot ang mas
                maraming tao at maipakilala ang aming masarap na fishball sauce
                sa buong bansa.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Tatay Jovy Fishbolan?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have questions about our products or need help with your order?
              We're here to help! Reach out to us anytime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">support@tatayjovystore.ph</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+63 9067671839</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
