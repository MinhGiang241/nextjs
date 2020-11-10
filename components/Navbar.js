import Link from "next/link";

const styles = {
  display: "flex",
  background: "grey",
  justifyContent: "space-between",
  padding: "1rem",
};

const Navbar = () => {
  return (
    <div style={styles}>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/contact">Contact </Link>
    </div>
  );
};

export default Navbar;
