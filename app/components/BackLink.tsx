import Link from "next/link";

// Small "back to home" link shown at the top of the inner pages.
// Change the text below if you want another wording.
export default function BackLink() {
  return (
    <Link href="/" className="back-link">
      <span aria-hidden="true">←</span> Back to home
    </Link>
  );
}
