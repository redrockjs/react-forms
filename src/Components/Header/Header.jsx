export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <div>
        <ul className="flex flex-row">
          <li className="cursor-pointer pr-1 text-blue-900">
            Simple
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            CreditCard
          </li>
        </ul>
      </div>
      <div>Forms</div>
    </div>
  )
}