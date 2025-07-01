import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CarouselData } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="flex items-center justify-between px-10 py-20 bg-gray-100 rounded-lg">
        {/* Left Side: Text + Button */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Welcome to StyleSack</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover the all latest bags at great price
          </p>
          <Button asChild variant="default">
            <Link href="/products">Explore Bags</Link>
          </Button>
        </div>

        {/* Right Side: Product Image */}
        <div>
          <Image
            alt="Bags"
            width={450}
            height={450}
            src={products.data[0].images[0]}
            className="object-contain"
          />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-10 py-12">
        <CarouselData products={products.data} />
      </section>
    </div>
  );
}
