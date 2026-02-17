import { Link } from 'react-router';
import { ShoppingCart, Ticket } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function Header() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Ticket className="size-8 text-blue-600" />
          <span className="text-2xl">TicketHub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Events
          </Link>
          <Link to="/checkout" className="hover:text-blue-600 transition-colors">
            Checkout
          </Link>
        </nav>

        <Link to="/checkout">
          <Button variant="outline" className="relative">
            <ShoppingCart className="size-5 mr-2" />
            Cart
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 size-6 flex items-center justify-center p-0 rounded-full">
                {itemCount}
              </Badge>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
}
