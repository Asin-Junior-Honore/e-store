import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="mt-16 mb-0 bg-white">
            <div className="container mx-auto px-4">
                <div className="mt-5">
                <Link href="/" className="font-black text-tertiary-light">
                    Afric<span className='text-primary'>Vogue</span>
                </Link>
                </div>
                <h4 className="font-semibold text-[20px] py-3">Contact</h4>
                <div className="flex flex-wrap gap-16 items-start justify-between">
                    <div className="flex-1">
                    <div className="flex items-center mb-4">
                        <BsGeoAlt />
                        <a 
                        href="https://maps.app.goo.gl/segckXu4xHSfdwis9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2"
                        >
                        Ashaley Botwe Accra,Ghana
                        </a>
                    </div>                  
                        <div className="flex items-center mb-4">
                            <BsFillSendFill />
                            <a href="mailto:dheztinykartel@gmail.com" 
                            className="ml-2">dheztinykartel@gmail.com</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <BsTelephoneOutbound />
                            <a href="tel:+2330505306932" className="ml-2">
                            0505306932
</a>
                        </div>
                        <div className="flex items-center mt-4">
                            <FaWhatsapp />
                            <a href="https://wa.me/2330505306932" className="ml-2">0505306932</a>
                        </div>
                    </div>
                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Blog post</p>
                        <p className="pb-4">Our Story</p>
                        <p className="pb-4">Terms of Service</p>
                        <p>Customer Support</p>
                    </div>
                </div>
            </div>
            <div className="bg-purple-100 h-6 md:h-[50px] w-full flex items-center justify-center">
                <a href="https://hollali.pxxl.space/" className="text-light font-bold">
                    Developed by Hollali
                </a>
            </div>
        </footer>
    );
};

export default Footer;
