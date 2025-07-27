import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Londrina_Sketch } from "next/font/google";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] flex flex-col items-start justify-start gap-4 md:gap-10 py-10 md:flex-col ">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 border-b pb-10">
            <div className="flex flex-col items-start px-8 md:px-0">
                <p className="text-center text-lg text-default font-semibold md:text-left mb-2">Keystone Information System</p>
                <p className="text-muted-foreground text-sm ">Corporate Headerquarters</p>
                <p className="text-muted-foreground text-sm ">900 Haddon Ave, Suite 420</p>
                <p className="text-muted-foreground text-sm ">Collingswood, NJ 08108</p>
                <div className="mt-6 flex flex-row md:gap-10 gap-4">
                    {/* <!-- Facebook --> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    {/* <!-- X --> */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 540 540">
                        {/*!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                        <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
                        </svg>
                    {/* <!-- Linkedin --> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    {/* <!-- Telegram --> */}
                    <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlSpace="preserve"
                        style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.41421",
                        }}
                    >
                        <path
                        id="telegram-1"
                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                        />
                    </svg>
                </div>
            </div>
            <nav className="flex gap-4 md:gap-18">
            <div className="flex flex-col gap-3">
                <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" >Terms</Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" >Contact</Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" >Accessibility</Link>
            </div>
            <div className="flex flex-col gap-3">
                <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" >ClientCare</Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" >Services</Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" >About Us</Link>
            </div>
            </nav>
        </div>
        <div className="w-full flex md:flex-row flex-col md:justify-between justify-center md:items-center items-between">
            <p className="text-center text-sm text-muted-foreground md:text-left">&copy; {new Date().getFullYear()} Keystone Information Systems. All rights reserved.</p>
            <Link href="#" className="flex flex-row gap-2 justify-center items-center text-xs font-bold">Back to top<ArrowUp className="h-4 w-4"/></Link>
        </div>
      </div>
    </footer>
  );
}
