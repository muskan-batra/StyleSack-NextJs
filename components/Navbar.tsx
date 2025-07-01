import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">AllBags</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
