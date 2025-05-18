import CartTrigger from "../cart/CartTrigger";
import Button from "../ui/Button";

export default function AuthorityBox() {
  return (
    <div className="page-width">
      <div className="rounded-3xl bg-black">
        <div className="flex flex-col justify-center items-center md:py-24">
          <div className="text-white text-center max-w-[400px] flex flex-col items-center">
            <h3 className="text-[18px] mb-4 capitalize">Gentle and safe</h3>
            <div className="flex gap-4">
              <CartTrigger>
                <Button buttonText="Open Cart"></Button>
              </CartTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}