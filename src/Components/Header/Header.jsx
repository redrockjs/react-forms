import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <nav>
        <ul className="flex flex-row">
          <li className="cursor-pointer pr-1 text-blue-900">
            <Link to="/">Simple</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/credit-card">CreditCard</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/dynamic-form">Dynamic Form</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/files-form">Files Form</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/advanced-files-form">Advanced Files Form</Link>
          </li>
        </ul>
      </nav>
      <div>Forms</div>
    </div>
  )
}