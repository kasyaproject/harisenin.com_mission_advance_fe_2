import React from "react";
import { ALL_MENU } from "@/constant/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MenuSection = () => {
  return (
    <>
      {/* <!-- Kategori & Perusahaan & Komunitas DESKTOP --> */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {Object.entries(ALL_MENU).map(([section, items], idx) => (
            <div key={idx}>
              <h3 className="font-semibold capitalize">{section}</h3>
              <ol className="mt-2 space-y-2 font-semibold text-gray-500">
                {items.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- Kategori & Perusahaan & Komunitas MOBILE --> */}
      <div className="block w-full lg:hidden">
        <Accordion type="single" collapsible>
          {Object.entries(ALL_MENU).map(([section, items], idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="font-semibold capitalize">
                {section}
              </AccordionTrigger>
              {items.map((item, index) => (
                <AccordionContent key={index} className="-mb-3 text-gray-500">
                  <a
                    href={item.href}
                    className="hover:text-gray-800 hover:underline"
                  >
                    {item.title}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default MenuSection;
